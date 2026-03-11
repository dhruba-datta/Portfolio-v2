const rateLimitCounter = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const origin = req.headers.get("origin") || "";
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:8888",
    "https://dhruba-datta.com",
    "https://dhruba-datta.netlify.app",
    "https://dhruba-datta-portfolio.netlify.app"
  ];

  if (!allowedOrigins.includes(origin)) {
    return new Response("Forbidden", { status: 403 });
  }

  // Basic IP-based rate limiting
  const ip = req.headers.get("x-nf-client-connection-ip") || "unknown";
  
  if (ip !== "unknown") {
    const now = Date.now();
    const record = rateLimitCounter.get(ip) || { count: 0, timestamp: now };
    
    // Reset window if it expired
    if (now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
      record.count = 0;
      record.timestamp = now;
    }
    
    record.count += 1;
    rateLimitCounter.set(ip, record);
    
    if (record.count > MAX_REQUESTS_PER_WINDOW) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Try again later." }), { 
        status: 429,
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  try {
    const data = await req.json();
    const { name, email, subject, message, recaptchaToken } = data;

    if (!name || !email || !subject || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    if (!recaptchaToken) {
      return new Response("Missing reCAPTCHA token", { status: 400 });
    }

    // Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${recaptchaSecret}&response=${recaptchaToken}`
      });
      const verifyData = await verifyRes.json();
      
      if (!verifyData.success || verifyData.score < 0.5) {
        console.error("reCAPTCHA failed:", verifyData);
        return new Response(JSON.stringify({ error: "Suspicious activity detected" }), { 
          status: 403,
          headers: { "Content-Type": "application/json" }
        });
      }
    } else {
      console.warn("RECAPTCHA_SECRET_KEY is not set in environment variables. Skipping verification.");
    }

    const payload = {
      service_id: process.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.VITE_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.VITE_EMAILJS_USER_ID || process.env.EMAILJS_USER_ID,
      accessToken: process.env.EMAILJS_ACCESS_TOKEN || "",
      template_params: { name, email, subject, message },
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": "https://dhruba-datta-portfolio.netlify.app",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("EmailJS Error:", response.status, errText);
      return new Response("Failed to send email to service", { status: 502 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Function Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = {
  path: "/api/send-email"
};
