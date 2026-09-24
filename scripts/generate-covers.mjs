// scripts/generate-covers.mjs — renders the typographic project covers in public/images/projects/.
// Run manually: node scripts/generate-covers.mjs (not part of the build).
import sharp from 'sharp';
const W=1600,H=880;
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

const motifs={
  // soft shader-like blobs
  shader:(c)=>`<defs><filter id="blur"><feGaussianBlur stdDeviation="40"/></filter></defs><g filter="url(#blur)"><circle cx="1180" cy="330" r="170" fill="${c.accent}" opacity="0.55"/><circle cx="1400" cy="520" r="150" fill="#818cf8" opacity="0.45"/><circle cx="1120" cy="580" r="110" fill="#22d3ee" opacity="0.35"/></g>`+[0,1,2,3].map(i=>`<path d="M${930} ${260+i*110} C 1150 ${180+i*110}, 1320 ${360+i*110}, 1560 ${250+i*110}" fill="none" stroke="#ffffff" stroke-opacity="${0.12+i*0.04}" stroke-width="2"/>`).join(''),
  // architectural elevation: building outline, floors and grid
  building:(c)=>{let m='';for(let i=0;i<=12;i++)m+=`<line x1="${930+i*52}" y1="160" x2="${930+i*52}" y2="720" stroke="${c.accent}" stroke-opacity="0.08" stroke-width="1"/>`;for(let j=0;j<=10;j++)m+=`<line x1="930" y1="${160+j*56}" x2="1554" y2="${160+j*56}" stroke="${c.accent}" stroke-opacity="0.08" stroke-width="1"/>`;
    m+=`<path d="M1020 700 L1020 330 L1240 220 L1460 330 L1460 700 Z" fill="${c.accent}" fill-opacity="0.07" stroke="${c.accent}" stroke-opacity="0.7" stroke-width="3"/>`;
    for(let f=0;f<5;f++)for(let w=0;w<5;w++)m+=`<rect x="${1055+w*80}" y="${360+f*62}" width="44" height="36" rx="3" fill="${c.accent}" opacity="${(f+w)%3===0?0.5:0.18}"/>`;
    m+=`<line x1="960" y1="700" x2="1520" y2="700" stroke="${c.accent}" stroke-opacity="0.6" stroke-width="3"/>`;return m;},
  code:(c)=>c.lines.map((l,i)=>`<text x="930" y="${290+i*58}" font-family="Menlo, monospace" font-size="30" fill="${c.accent}" opacity="${0.6+i*0.08}" xml:space="preserve">${esc(l)}</text>`).join(''),
  pins:(c)=>{let m='';for(let i=0;i<19;i++){const x=1110+(i%5)*95+(Math.floor(i/5)%2)*47,y=230+Math.floor(i/5)*110;m+=`<circle cx="${x}" cy="${y}" r="12" fill="${c.accent}" opacity="0.55"/><circle cx="${x}" cy="${y}" r="26" fill="none" stroke="${c.accent}" stroke-opacity="0.25" stroke-width="2"/>`;}return m;},
  weave:(c)=>{let m='';for(let i=0;i<14;i++)m+=`<line x1="${900+i*50}" y1="160" x2="${900+i*50}" y2="720" stroke="${c.accent}" stroke-opacity="0.25" stroke-width="10"/>`;for(let j=0;j<12;j++)m+=`<line x1="880" y1="${180+j*48}" x2="1580" y2="${180+j*48}" stroke="${c.accent}" stroke-opacity="${j%2?0.18:0.35}" stroke-width="10" stroke-dasharray="50 50" stroke-dashoffset="${j%2?50:0}"/>`;return m;},
  // n8n-style workflow: nodes joined by curves
  flow:(c)=>{const n=c.nodes||[[1000,300],[1180,220],[1180,420],[1360,320],[1500,460]];const e=c.edges||[[0,1],[0,2],[1,3],[2,3],[3,4]];let m='';
    for(const [a,b] of e){const [x1,y1]=n[a],[x2,y2]=n[b];const mx=(x1+x2)/2;m+=`<path d="M${x1+45} ${y1} C${mx+20} ${y1}, ${mx-20} ${y2}, ${x2-45} ${y2}" fill="none" stroke="${c.accent}" stroke-opacity="0.45" stroke-width="4"/>`;}
    n.forEach(([x,y],i)=>{m+=`<rect x="${x-45}" y="${y-45}" width="90" height="90" rx="20" fill="${c.accent}" fill-opacity="${i===0?0.35:0.14}" stroke="${c.accent}" stroke-opacity="0.6" stroke-width="3"/><circle cx="${x}" cy="${y}" r="12" fill="${c.accent}" opacity="0.8"/>`;});return m;},
  wave:(c)=>{let m='';for(let i=0;i<34;i++){const h=40+Math.abs(Math.sin(i*0.55)*Math.cos(i*0.21))*300;m+=`<rect x="${940+i*18}" y="${440-h/2}" width="9" height="${h}" rx="4.5" fill="${c.accent}" opacity="${0.3+0.5*(h/340)}"/>`;}return m;},
  bars:(c)=>{let m='';const v=[0.3,0.45,0.4,0.6,0.55,0.75,0.7,0.9];v.forEach((h,i)=>{m+=`<rect x="${960+i*75}" y="${700-h*460}" width="48" height="${h*460}" rx="10" fill="${c.accent}" opacity="${0.25+h*0.5}"/>`;});m+=`<line x1="930" y1="702" x2="1560" y2="702" stroke="${c.accent}" stroke-opacity="0.4" stroke-width="3"/>`;return m;},
  candles:(c)=>{let m='';let y=640;for(let i=0;i<14;i++){const up=Math.sin(i*1.7)>-0.3;const b=20+((i*37)%50);const ny=up?y-b*0.7:y+b*0.5;const top=Math.min(y,ny),hgt=Math.max(18,Math.abs(ny-y));m+=`<line x1="${965+i*44}" y1="${top-30}" x2="${965+i*44}" y2="${top+hgt+30}" stroke="${c.accent}" stroke-opacity="0.45" stroke-width="3"/><rect x="${950+i*44}" y="${top}" width="30" height="${hgt}" rx="4" fill="${up?c.accent:'#f87171'}" opacity="${up?0.75:0.55}"/>`;y=ny;}return m;},
  browser:(c)=>`<rect x="930" y="200" width="620" height="480" rx="24" fill="${c.accent}" fill-opacity="0.08" stroke="${c.accent}" stroke-opacity="0.45" stroke-width="3"/>
    <line x1="930" y1="258" x2="1550" y2="258" stroke="${c.accent}" stroke-opacity="0.35" stroke-width="3"/>
    ${[0,1,2].map(i=>`<circle cx="${968+i*30}" cy="229" r="9" fill="${c.accent}" opacity="0.6"/>`).join('')}
    <rect x="970" y="300" width="300" height="34" rx="8" fill="${c.accent}" opacity="0.55"/>
    <rect x="970" y="350" width="420" height="18" rx="6" fill="${c.accent}" opacity="0.25"/>
    <rect x="970" y="380" width="360" height="18" rx="6" fill="${c.accent}" opacity="0.25"/>
    <rect x="970" y="420" width="140" height="44" rx="12" fill="${c.accent}" opacity="0.6"/>
    ${[0,1,2].map(i=>`<rect x="${970+i*190}" y="510" width="170" height="130" rx="14" fill="${c.accent}" opacity="0.16"/>`).join('')}`,
  phone:(c)=>`<rect x="1110" y="140" width="300" height="600" rx="44" fill="${c.accent}" fill-opacity="0.08" stroke="${c.accent}" stroke-opacity="0.5" stroke-width="4"/>
    <rect x="1215" y="162" width="90" height="16" rx="8" fill="${c.accent}" opacity="0.4"/>
    ${[0,1,2,3,4].map(i=>`<rect x="1140" y="${220+i*95}" width="240" height="75" rx="16" fill="${c.accent}" opacity="${0.12+i*0.05}"/><circle cx="1180" cy="${257+i*95}" r="18" fill="${c.accent}" opacity="0.55"/><rect x="1212" y="${245+i*95}" width="${130-i*10}" height="12" rx="6" fill="${c.accent}" opacity="0.5"/>`).join('')}`,
  masonry:(c)=>{const cols=[[180,120,200],[130,220,110],[210,150,120],[140,120,220]];let m='';cols.forEach((col,ci)=>{let y=170;col.forEach((h,ri)=>{m+=`<rect x="${950+ci*155}" y="${y}" width="140" height="${h}" rx="16" fill="${c.accent}" opacity="${0.14+((ci+ri)%3)*0.12}"/>`;y+=h+15;});});return m;},
  rows:(c)=>{let m='';for(let i=0;i<7;i++){m+=`<rect x="940" y="${190+i*72}" width="600" height="56" rx="14" fill="${c.accent}" fill-opacity="${i===0?0.3:0.1}" stroke="${c.accent}" stroke-opacity="0.25" stroke-width="2"/><rect x="965" y="${210+i*72}" width="${160+((i*53)%120)}" height="16" rx="6" fill="${c.accent}" opacity="0.5"/><rect x="1440" y="${206+i*72}" width="70" height="24" rx="12" fill="${c.accent}" opacity="${i%3===0?0.7:0.3}"/>`;}return m;},
  rings:(c)=>[0,1,2,3,4,5].map(i=>`<circle cx="1260" cy="440" r="${60+i*55}" fill="none" stroke="${c.accent}" stroke-opacity="${0.55-i*0.08}" stroke-width="${6-i*0.6}" stroke-dasharray="${i%2?'18 14':'none'}"/>`).join('')+`<circle cx="1260" cy="440" r="26" fill="${c.accent}" opacity="0.7"/>`,
};

const covers=[
  {file:'Optify', title:'Optify', sub:'AI systems that do the work', a:'#1e1b4b', b:'#0b1020', accent:'#a78bfa', motif:'shader'},
  {file:'Mantissa Design', title:'Mantissa Design', sub:'Architecture & engineering, Dhaka', a:'#1c1917', b:'#0c0a09', accent:'#d6b98c', motif:'building'},
  {file:'Social Engagement Group', title:'Social Engagement Group', sub:'Agency platform on Next.js', a:'#0c2a3f', b:'#0f172a', accent:'#38bdf8', motif:'browser'},
  {file:'Flame Japanese Hibachi', title:'Flame Japanese Hibachi', sub:'Multi-location web & lead capture', a:'#431407', b:'#0f172a', accent:'#fb923c', motif:'pins'},
  {file:'SEG Marketing', title:'SEG Marketing', sub:'Industry lead-generation pages', a:'#083344', b:'#0f172a', accent:'#22d3ee', motif:'bars'},
  {file:'Operavo', title:'Operavo', sub:'Real-time voice AI for real estate', a:'#022c22', b:'#0a0f0d', accent:'#34d399', motif:'wave'},
  {file:'AllureHive', title:'AllureHive', sub:'Natural woven home décor', a:'#3f2d1c', b:'#1c1917', accent:'#e7c9a0', motif:'weave'},
  {file:'UpCell', title:'UpCell', sub:'Certified premium Apple devices', a:'#450a0a', b:'#0f172a', accent:'#f87171', motif:'browser'},
  {file:'RydeBondhu', title:'RydeBondhu', sub:'Your crew. Your route. One app.', a:'#172554', b:'#0d1424', accent:'#3b82f6', motif:'rings'},
  {file:'AB Pharmacy', title:'AB Pharmacy', sub:'Wholesale medicine platform', a:'#042f2e', b:'#0f172a', accent:'#2dd4bf', motif:'rows'},
  {file:'AB Pharmacy App', title:'AB Pharmacy App', sub:'Pharmacy ordering on Android', a:'#172554', b:'#0f172a', accent:'#60a5fa', motif:'phone'},
  {file:'Cold Email Pipeline (n8n)', title:'Cold Email Pipeline', tag:'n8n', sub:'Research first, then reach out', a:'#3b0764', b:'#0f172a', accent:'#c084fc', motif:'flow', nodes:[[980,440],[1115,300],[1250,440],[1385,580],[1520,440]], edges:[[0,1],[1,2],[2,3],[3,4]]},
  {file:'Website Lead Intake (n8n)', title:'AI Lead Intake', tag:'n8n', sub:'Screen, sort, verify, alert', a:'#0c4a6e', b:'#0f172a', accent:'#38bdf8', motif:'flow', nodes:[[980,440],[1120,440],[1260,440],[1390,280],[1390,600],[1520,440]], edges:[[0,1],[1,2],[2,3],[2,4],[3,5],[4,5]]},
  {file:'AI Voice Agent (n8n MCP)', title:'AI Voice Agent', tag:'n8n', sub:'Calls, bookings and handoffs', a:'#064e3b', b:'#0f172a', accent:'#10b981', motif:'wave'},
  {file:'SEO Audit (n8n)', title:'SEO Audit', tag:'n8n', sub:'AI-powered SEO audit workflow', a:'#4c0519', b:'#0f172a', accent:'#fb7185', motif:'flow'},
  {file:'Brevo Email Marketing (n8n)', title:'Brevo Email Marketing', tag:'n8n', sub:'Event-driven email orchestration', a:'#052e16', b:'#0f172a', accent:'#4ade80', motif:'flow', nodes:[[990,440],[1160,280],[1160,600],[1330,440],[1490,300],[1490,580]], edges:[[0,1],[0,2],[1,3],[2,3],[3,4],[3,5]]},
  {file:'Content Idea Generator (n8n)', title:'Content Idea Generator', tag:'n8n', sub:'AI content ideation workflow', a:'#500724', b:'#0f172a', accent:'#f472b6', motif:'flow', nodes:[[990,300],[1150,440],[1320,300],[1320,580],[1490,440]], edges:[[0,1],[1,2],[1,3],[2,4],[3,4]]},
  {file:'Intelligent Product Order (n8n)', title:'Intelligent Product Order', tag:'n8n', sub:'Email orders to Monday.com tasks', a:'#451a03', b:'#0f172a', accent:'#fbbf24', motif:'flow', nodes:[[990,440],[1150,440],[1310,300],[1310,580],[1480,440]], edges:[[0,1],[1,2],[1,3],[2,4],[3,4]]},
  {file:'Aqua', title:'Aqua Innovations', sub:'Agency platform with cinematic motion', a:'#083344', b:'#020617', accent:'#22d3ee', motif:'rings'},
  {file:'photobooth', title:'PhotoBooth', sub:'Full-resolution photo sharing', a:'#422006', b:'#0f172a', accent:'#f59e0b', motif:'masonry'},
  {file:'Kingsley Group', title:'Kingsley Group', sub:'Corporate WordPress redesign', a:'#14532d', b:'#0f172a', accent:'#86efac', motif:'browser'},
  {file:'KFC Clone', title:'KFC Clone', sub:'Vue 3 food ordering app', a:'#450a0a', b:'#0f172a', accent:'#f87171', motif:'browser'},
  {file:'EasyCooking', title:'EasyCooking', sub:'Multi-cuisine recipe site', a:'#431407', b:'#1c1917', accent:'#fdba74', motif:'masonry'},
  {file:'Food Ordering System', title:'Food Ordering System', sub:'C++ console point of sale', a:'#1e293b', b:'#020617', accent:'#94a3b8', motif:'code', lines:['class Order {','  int token;','  double total();','};','cout << "Bill: " << total;']},
  {file:'CryptoVerse', title:'CryptoVerse', sub:'Real-time crypto dashboard', a:'#422006', b:'#0f172a', accent:'#facc15', motif:'candles'},
  {file:'Portfolio v1', title:'Portfolio v1', sub:'HTML, CSS & JavaScript', a:'#431407', b:'#0f172a', accent:'#fb923c', motif:'code', lines:['<section id="about">','  <h1>Dhruba Datta</h1>','  <p>Developer</p>','</section>','<script src="app.js">']},
  {file:'Portfolio v2', title:'Portfolio v2', sub:'React 18 & TypeScript', a:'#172554', b:'#0f172a', accent:'#60a5fa', motif:'code', lines:['export const App = () => (','  <Layout>','    <Hero />','    <Projects />','  </Layout>);']},
];

// Wrap the title into lines of at most ~16 chars
function wrap(t,max=16){const w=t.split(' ');const lines=[];let cur='';for(const x of w){if((cur+' '+x).trim().length>max&&cur){lines.push(cur);cur=x;}else cur=(cur+' '+x).trim();}lines.push(cur);return lines;}

for (const c of covers){
  const lines = c.title.length<=13 ? [c.title] : wrap(c.title);
  const size = lines.length===1 ? (c.title.length<=11?104:84) : 76;
  const lh = size*1.08;
  const baseY = 470 - (lines.length-1)*lh;
  const titleSvg = lines.map((l,i)=>`<text x="110" y="${baseY+i*lh}" font-family="Helvetica Neue, Arial, sans-serif" font-weight="700" font-size="${size}" fill="#ffffff">${esc(l)}</text>`).join('');
  const subY = 470 + 70;
  const tag = c.tag ? `<rect x="112" y="${baseY-size-40}" width="92" height="40" rx="20" fill="${c.accent}" fill-opacity="0.18" stroke="${c.accent}" stroke-opacity="0.6" stroke-width="2"/><text x="158" y="${baseY-size-13}" text-anchor="middle" font-family="Menlo, monospace" font-size="22" fill="${c.accent}">${c.tag}</text>` : '';
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c.a}"/><stop offset="1" stop-color="${c.b}"/></linearGradient>
  <radialGradient id="r" cx="0.8" cy="0.2" r="0.7"><stop offset="0" stop-color="${c.accent}" stop-opacity="0.25"/><stop offset="1" stop-color="${c.accent}" stop-opacity="0"/></radialGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#r)"/>
  ${motifs[c.motif](c)}
  ${tag}${titleSvg}
  <text x="112" y="${subY}" font-family="Helvetica Neue, Arial, sans-serif" font-size="38" fill="#ffffff" opacity="0.75">${esc(c.sub)}</text>
  <rect x="112" y="${subY+45}" width="120" height="6" rx="3" fill="${c.accent}"/>
</svg>`;
  // Drawn at 1600x880, saved at 1200px (detail pages, link previews) and 640px (project cards)
  const img = sharp(Buffer.from(svg));
  await img.clone().resize(1200).webp({quality:82}).toFile(`public/images/projects/${c.file}.webp`);
  await img.clone().resize(640).webp({quality:80}).toFile(`public/images/projects/${c.file}-640.webp`);
}
console.log('generated', covers.length);
