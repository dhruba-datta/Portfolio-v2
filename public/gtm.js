(function() {
  var gtmLoaded = false;
  function loadGTM() {
    if (gtmLoaded) return;
    gtmLoaded = true;

    window.removeEventListener('scroll', loadGTM);
    window.removeEventListener('mousemove', loadGTM);
    window.removeEventListener('touchstart', loadGTM);
    window.removeEventListener('click', loadGTM);

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-GZJE2T5D5L";
    document.head.appendChild(script);

    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-GZJE2T5D5L");
    };
  }

  window.addEventListener('scroll', loadGTM, { passive: true });
  window.addEventListener('mousemove', loadGTM, { passive: true });
  window.addEventListener('touchstart', loadGTM, { passive: true });
  window.addEventListener('click', loadGTM, { passive: true });

  setTimeout(loadGTM, 5000);
})();
