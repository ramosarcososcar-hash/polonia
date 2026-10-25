(()=>{(function(){"use strict";if(!window.customElements||customElements.get("pl-suitcase"))return;let A=600,T=500,o=64,a=130,n=400,f=300,l=71,d={x:o+22,y:a+22,w:n-44,h:f-44},j=(r,e)=>(r/e*100).toFixed(3)+"%",B=matchMedia("(prefers-reduced-motion: reduce)"),O=r=>String(r||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l"),Y=r=>String(r??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),R=r=>{let e=String(r||"").replace(/\s*\(.*?\)\s*/g," ").split(/ \+ |:/)[0].trim();return e.length>30?e.slice(0,29)+"\u2026":e},J={id:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M6.3 16c.6-1.4 1.5-2 2.7-2s2.1.6 2.7 2M14 10h4M14 13.5h3"/>',shield:'<path d="M12 3l7 3v5c0 4.6-3 8-7 10-4-2-7-5.4-7-10V6z"/><path d="M12 9v6M9 12h6"/>',ticket:'<path d="M4 6.5h16v3.5a2 2 0 0 0 0 4v3.5H4V14a2 2 0 0 0 0-4z"/><path d="M14.5 7v2M14.5 11v2M14.5 15v2"/>',card:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 14.5h3"/>',cash:'<rect x="3" y="7" width="18" height="10" rx="1.5"/><circle cx="12" cy="12" r="2.2"/><path d="M6.5 10v4M17.5 10v4"/>',jacket:'<path d="M9 3.5l3 2.5 3-2.5 4.5 3L18 12h-2v8.5H8V12H6L4.5 6.5z"/><path d="M12 6v14.5M9.5 14h1M13.5 14h1"/>',shirt:'<path d="M8.5 4h7l4.5 3-2 4-2.2-1.1V20H8.2V9.9L6 11 4 7z"/><path d="M10 4a2 2 0 0 0 4 0"/>',pants:'<path d="M7 3h10l1.2 18h-4.4L12 10.5 10.2 21H5.8z"/><path d="M7 6h10"/>',hat:'<path d="M5 15.5a7 7 0 0 1 14 0z"/><rect x="4" y="15.5" width="16" height="3.5" rx="1.2"/><circle cx="12" cy="6.5" r="1.6"/>',shoe:'<path d="M3 17v-6.5l5 1 2.2 3 7 1.2c2.2.4 3.8 1.5 3.8 3.3v1H3z"/><path d="M3 19h18M8 12.5l-1 2.2"/>',sock:'<path d="M9 3h6v9.5l2.8 2.8a3 3 0 0 1-4.2 4.2L9 15z"/><path d="M9 6.5h6"/>',under:'<path d="M4 7h16l-1 4.2c-2.2.2-4 2.2-4.4 5.8H9.4C9 13.4 7.2 11.4 5 11.2z"/>',moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',umbrella:'<path d="M3 12.5a9 9 0 0 1 18 0z"/><path d="M12 12.5V18a2 2 0 0 1-4 0M12 3.5v.5"/>',phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.3"/><path d="M11 18.5h2"/>',battery:'<rect x="3" y="7.5" width="16" height="10" rx="2"/><path d="M21 11v3M11.5 9.5L9.5 12.7h3l-2 3.3"/>',headphones:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4.2" height="6.5" rx="1.6"/><rect x="16.8" y="14" width="4.2" height="6.5" rx="1.6"/>',camera:'<path d="M4 8h3.2L9 5.2h6L16.8 8H20v11.5H4z"/><circle cx="12" cy="13.5" r="3.4"/>',plug:'<path d="M9 3v4M15 3v4M7 7h10v4a5 5 0 0 1-10 0z"/><path d="M12 16v5"/>',pill:'<path d="M10.5 20.5a5 5 0 0 1-7-7l6.5-6.5a5 5 0 0 1 7 7z"/><path d="M7 10.5l6.5 6.5"/>',bandage:'<rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="M10.6 11h.01M13.4 13h.01M12 12h.01M10.6 13h.01M13.4 11h.01"/>',tube:'<path d="M9 3h6v2.8l2 2.2V21H7V8l2-2.2z"/><path d="M7 12h10"/>',tissue:'<path d="M5 10h14v10H5z"/><path d="M9.5 10c0-3.2 5-3 5-6.5"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',brush:'<path d="M4.5 19.5l10-10"/><path d="M13 7l4 4 3-3-4-4z"/><path d="M15.5 5.5l3 3"/>',spray:'<rect x="7" y="8.5" width="10" height="12.5" rx="2"/><path d="M9.5 8.5V5.5h5v3M14.5 5.5H18M18 3.5v4"/>',glasses:'<circle cx="6.8" cy="14" r="3.5"/><circle cx="17.2" cy="14" r="3.5"/><path d="M10.3 14h3.4M3.3 14L5 7.5M20.7 14L19 7.5"/>',bag:'<path d="M5 8.5h14l-1.2 12H6.2z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/>',bottle:'<path d="M10 2.5h4v3l2 3V21H8V8.5l2-3z"/><path d="M8 12.5h8"/>',tote:'<path d="M4 9.5h16l-1.8 11H5.8z"/><path d="M8 9.5a4 4 0 0 1 8 0"/>',file:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/>',cross:'<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/>',tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>'},Z=[[/dni|pasaporte/,"id"],[/sanitaria|seguro/,"shield"],[/embarque|reserva/,"ticket"],[/tarjeta|banco/,"card"],[/efectivo|zl\b/,"cash"],[/chaqueta|abrigo|plumifero/,"jacket"],[/pantalon|vaquero/,"pants"],[/gorro|guantes|bufanda/,"hat"],[/calzado|zapat|bota/,"shoe"],[/calcetin/,"sock"],[/ropa interior|bragas|calzoncillo/,"under"],[/pijama/,"moon"],[/paraguas/,"umbrella"],[/power ?bank|bateria/,"battery"],[/movil|telefono/,"phone"],[/auricular/,"headphones"],[/camara/,"camera"],[/cable|cargador|adaptador/,"plug"],[/paracetamol|ibuprofeno|medicac|pastilla/,"pill"],[/tirita|ampolla/,"bandage"],[/crema|protector|labial/,"tube"],[/panuelo/,"tissue"],[/liquido/,"drop"],[/cepillo|pasta de dientes/,"brush"],[/desodorante|colonia|perfume/,"spray"],[/gafas|lentilla/,"glasses"],[/botella|termo/,"bottle"],[/bolsa de tela/,"tote"],[/bolso|mochila|bolsa/,"bag"],[/camiseta|jersey|forro|polar|sudadera/,"shirt"]],I={Documentos:["file","var(--c1)"],Ropa:["shirt","var(--c2)"],Electr\u00F3nica:["plug","var(--c3)"],Botiqu\u00EDn:["cross","var(--c4)"],Neceser:["drop","var(--c5)"],Varios:["tag","var(--muted)"]},tt=/chaqueta|calzado|gorro/,et=/bolso que cumpla/,D=r=>{let e=O(r.label);for(let[i,h]of Z)if(i.test(e))return h;return(I[r.cat]||I.Varios)[0]},_=r=>(I[r.cat]||I.Varios)[1],N=r=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${J[r]||J.tag}</svg>`,Q=r=>r.map(e=>e.join(",")).join(" "),st=Q([[o+10,a+10],[o+10+l,a+10-l],[o+n-10+l,a+10-l],[o+n-10,a+10]]),it=Q([[o+n-10,a+10],[o+n-10+l,a+10-l],[o+n-10+l,a+f-10-l],[o+n-10,a+f-10]]),M=[o+150+l/2,a-l/2+2],k=[o+250+l/2,a-l/2+2],P=a+f+30,E=o-30,H=o+n+14,V=a+f+14,F=H+l,W=V-l,at=`<svg class="sc-svg" viewBox="0 0 ${A} ${T}" aria-hidden="true" focusable="false">
<defs>
<linearGradient id="plscShine" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".24"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>
<linearGradient id="plscIn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".18"/><stop offset=".22" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".05"/></linearGradient>
</defs>
<g class="sc-dims">
<path d="M${o} ${P}H${o+n}M${o} ${P-9}v18M${o+n} ${P-9}v18"/>
<text x="${o+n/2}" y="${P+32}" text-anchor="middle">40 cm</text>
<path d="M${E} ${a}V${a+f}M${E-9} ${a}h18M${E-9} ${a+f}h18"/>
<text x="${E-14}" y="${a+f/2}" text-anchor="middle" transform="rotate(-90 ${E-14} ${a+f/2})">30 cm</text>
<path d="M${H} ${V}L${F} ${W}M${H-6} ${V-6}l12 12M${F-6} ${W-6}l12 12"/>
<text x="${(H+F)/2+22}" y="${(V+W)/2+22}" text-anchor="middle" transform="rotate(-45 ${(H+F)/2+22} ${(V+W)/2+22})">20 cm</text>
</g>
<g class="sc-bagg">
<polygon class="sc-side" points="${it}"/>
<polygon class="sc-top" points="${st}"/>
<path class="sc-handle" d="M${M[0]} ${M[1]}C${M[0]+4} ${M[1]-62} ${k[0]-4} ${k[1]-62} ${k[0]} ${k[1]}"/>
<ellipse class="sc-anchor" cx="${M[0]}" cy="${M[1]}" rx="13" ry="7"/><ellipse class="sc-anchor" cx="${k[0]}" cy="${k[1]}" rx="13" ry="7"/>
<rect class="sc-front" x="${o}" y="${a}" width="${n}" height="${f}" rx="26"/>
<rect x="${o}" y="${a}" width="${n}" height="${f}" rx="26" fill="url(#plscShine)"/>
<rect class="sc-zip" x="${o+10}" y="${a+10}" width="${n-20}" height="${f-20}" rx="18"/>
<rect class="sc-win" x="${d.x}" y="${d.y}" width="${d.w}" height="${d.h}" rx="14"/>
<rect x="${d.x}" y="${d.y}" width="${d.w}" height="${d.h}" rx="14" fill="url(#plscIn)"/>
<rect class="sc-pull" x="${o+n-92}" y="${a+3}" width="13" height="30" rx="6.5"/>
<g class="sc-ok" transform="translate(${o+n-8} ${a+8})"><circle r="23"/><path d="M-10 0l6.5 6.5L10.5-7"/></g>
</g>
</svg>`,ot='<svg viewBox="0 0 28 28" aria-hidden="true"><polygon class="sc-side" points="20,9 24,5 24,20 20,24" /><polygon class="sc-top" points="5,9 9,5 24,5 20,9"/><rect class="sc-front" x="4" y="9" width="16" height="15" rx="3"/><rect class="sc-win" x="6.5" y="11.5" width="11" height="10" rx="1.6"/></svg>',rt=`
pl-suitcase{display:block}
.sc{padding:20px;display:grid;gap:14px}
.sc-h{display:flex;align-items:flex-end;justify-content:space-between;gap:12px}
.sc-h h3{font-size:1.25rem;font-weight:700;letter-spacing:-.015em;line-height:1.2;margin:2px 0 0}
.sc-h .eyebrow{display:block}
.sc-n{text-align:right;line-height:1;flex-shrink:0}
.sc-n b{font-size:2rem;font-weight:800;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.sc-n span{color:var(--muted);font-weight:700;font-size:1.05rem;font-variant-numeric:tabular-nums}
.sc-n small{display:block;font-size:.75rem;color:var(--muted);margin-top:5px;font-weight:600}
.sc-body{display:grid;gap:16px}
@media (min-width:1024px){.sc-body{grid-template-columns:minmax(0,1fr) 300px;align-items:center;gap:28px}}
.sc-stage{position:relative;width:100%;max-width:520px;margin:0 auto;aspect-ratio:${A}/${T}}
.sc-svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.sc-dims path{stroke:var(--muted);stroke-width:2;fill:none;opacity:.8}
.sc-dims text{fill:var(--muted);font-size:22px;font-weight:700;font-family:inherit;letter-spacing:.01em}
.sc-front{fill:#C8102E;fill:var(--accent,#C8102E)}
.sc-top{fill:#E04A63;stroke:#E04A63;fill:color-mix(in srgb,var(--accent,#C8102E) 76%,#fff);stroke:color-mix(in srgb,var(--accent,#C8102E) 76%,#fff);stroke-width:20;stroke-linejoin:round}
.sc-side{fill:#8E0A20;stroke:#8E0A20;fill:color-mix(in srgb,var(--accent,#C8102E) 66%,#000);stroke:color-mix(in srgb,var(--accent,#C8102E) 66%,#000);stroke-width:20;stroke-linejoin:round}
.sc-handle{fill:none;stroke:#5a0614;stroke:color-mix(in srgb,var(--accent,#C8102E) 45%,#000);stroke-width:14;stroke-linecap:round}
.sc-anchor{fill:#5a0614;fill:color-mix(in srgb,var(--accent,#C8102E) 45%,#000)}
.sc-zip{fill:none;stroke:rgba(255,255,255,.5);stroke-width:3.2;stroke-dasharray:1 7;stroke-linecap:round}
.sc-win{fill:#F8F0F1;fill:color-mix(in srgb,var(--accent,#C8102E) 7%,var(--surface,#fff));stroke:rgba(0,0,0,.1);stroke-width:1.5}
@media (max-width:1023.98px){main:has(pl-suitcase){padding-bottom:calc(160px + env(safe-area-inset-bottom,0px))}}
.sc-pull{fill:rgba(255,255,255,.85)}
.sc-ok{opacity:0;transition:opacity .3s}
.sc-ok circle{fill:var(--ok,#1f8a52);stroke:var(--surface,#fff);stroke-width:5}
.sc-ok path{fill:none;stroke:#fff;stroke-width:5;stroke-linecap:round;stroke-linejoin:round}
.sc-stage.ok .sc-ok{opacity:1}
.sc-bagg{transform-box:fill-box;transform-origin:50% 100%}
.sc-in{position:absolute;left:${j(d.x,A)};top:${j(d.y,T)};width:${j(d.w,A)};height:${j(d.h,T)};padding:1.2%;box-sizing:border-box;display:flex;flex-wrap:wrap-reverse;align-content:flex-start;overflow:hidden;border-radius:4%}
.sc-t{flex:0 0 var(--tw);height:var(--th);display:grid;place-items:center;padding:0;margin:0;border:0;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent}
.sc-t i{width:84%;height:84%;border-radius:26%;display:grid;place-items:center;color:var(--cc);background:var(--surface,#fff);background:color-mix(in srgb,var(--cc) 14%,var(--surface,#fff));box-shadow:0 1px 2px rgba(0,0,0,.14),inset 0 0 0 1px rgba(0,0,0,.05)}
.sc-t svg{width:60%;height:60%}
.sc-t.wait{opacity:0}
.sc-t.pop i{animation:scpop .5s cubic-bezier(.3,1.6,.5,1)}
.sc-t.out{transition:transform .26s ease,opacity .26s ease;transform:scale(.3);opacity:0}
.sc-t:focus-visible i{outline:2px solid var(--ink);outline-offset:2px}
@keyframes scpop{0%{transform:scale(.35)}100%{transform:scale(1)}}
.sc-empty{position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:10%;color:var(--muted);font-size:.8125rem;font-weight:600;line-height:1.35;pointer-events:none}
.sc-say{position:absolute;left:50%;top:6%;transform:translate(-50%,-6px);background:var(--ink);color:var(--bg);font-size:.8125rem;font-weight:700;padding:6px 12px;border-radius:999px;white-space:nowrap;max-width:92%;overflow:hidden;text-overflow:ellipsis;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;z-index:6}
.sc-say.on{opacity:1;transform:translate(-50%,0)}
.sc-tok{position:absolute;z-index:7;display:flex;flex-direction:column;align-items:center;gap:6px;pointer-events:none;left:0;top:0;will-change:transform,opacity}
.sc-tok.fx{position:fixed;z-index:60}
.sc-tok-ic{width:46px;height:46px;border-radius:14px;display:grid;place-items:center;color:var(--cc);background:var(--surface,#fff);box-shadow:0 10px 26px rgba(0,0,0,.24),inset 0 0 0 1px rgba(0,0,0,.05)}
.sc-tok-ic svg{width:26px;height:26px}
.sc-tok-l{font-size:.75rem;font-weight:700;background:var(--ink);color:var(--bg);padding:4px 10px;border-radius:999px;white-space:nowrap;max-width:220px;overflow:hidden;text-overflow:ellipsis}
.sc-side-info{display:grid;gap:14px;align-content:start}
.sc-bar{height:8px;border-radius:999px;background:var(--fill);overflow:hidden}
.sc-bar i{display:block;height:100%;width:0;border-radius:inherit;background:var(--ok);transition:width .5s cubic-bezier(.2,.8,.2,1)}
.sc-specs{display:flex;flex-wrap:wrap;gap:6px}
.sc-c{font-size:.8125rem;font-weight:600;padding:6px 10px;border-radius:999px;background:var(--fill);white-space:nowrap}
.sc-c b{font-weight:800}
.sc-ttl{font-size:.75rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:0 0 8px}
.sc-worn-l{display:flex;flex-wrap:wrap;gap:6px}
.sc-w{display:inline-flex;align-items:center;gap:7px;padding:5px 11px 5px 5px;border-radius:999px;font-size:.8125rem;font-weight:600;border:1.5px dashed var(--line-strong);color:var(--muted);transition:background .25s,border-color .25s,color .25s}
.sc-w i{width:24px;height:24px;border-radius:999px;display:grid;place-items:center;background:var(--fill);color:var(--muted)}
.sc-w svg{width:15px;height:15px}
.sc-w.on{border-style:solid;border-color:transparent;color:var(--ink);background:var(--fill)}
.sc-w.on i{background:var(--cc);color:#fff}
.sc-w.pop i{animation:scpop .5s cubic-bezier(.3,1.6,.5,1)}
.sc-note{font-size:.75rem;color:var(--muted);line-height:1.4;margin:0}
.sc-done{display:none;align-items:center;gap:8px;font-weight:700;color:var(--ok);font-size:.9375rem}
.sc-done svg{width:18px;height:18px}
.sc.all .sc-done{display:flex}
.sc-mini{position:fixed;left:50%;bottom:calc(94px + env(safe-area-inset-bottom,0px));transform:translate(-50%,18px);opacity:0;pointer-events:none;z-index:46;display:flex;align-items:center;gap:8px;padding:6px 14px 6px 7px;border-radius:999px;border:0;background:var(--surface,#fff);color:var(--ink);font-weight:700;font-size:.875rem;line-height:1;font-family:inherit;box-shadow:0 12px 32px rgba(0,0,0,.2),0 0 0 1px var(--line,rgba(0,0,0,.08));transition:opacity .25s,transform .25s;cursor:pointer;font-variant-numeric:tabular-nums}
.sc-mini.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}
.sc-mini svg{width:30px;height:30px}
.sc-mini .sc-top,.sc-mini .sc-side{stroke-width:1.5}
.sc-mini small{color:var(--muted);font-weight:600}
@media (min-width:1024px){.sc-mini{bottom:24px}}
@media (prefers-reduced-motion: reduce){.sc-t.pop i,.sc-w.pop i{animation:none}.sc-mini,.sc-say{transition:none}}
`;class nt extends HTMLElement{connectedCallback(){if(!document.getElementById("pl-suitcase-css")){let i=document.createElement("style");i.id="pl-suitcase-css",i.textContent=rt,document.head.appendChild(i)}this.tiles=new Map,this.prev=null,this.queue=0,this.visible=!0,this.innerHTML=`<section class="card sc" aria-label="La maleta">
  <div class="sc-h"><div><span class="eyebrow">Wizz Air \xB7 bolso gratis bajo el asiento</span><h3>Vuestra maleta</h3></div>
  <div class="sc-n" aria-hidden="true"><b data-r="n">0</b><span data-r="t">/0</span><small>preparado</small></div></div>
  <div class="sc-body">
    <div class="sc-stage" role="img" data-r="stage">${at}<div class="sc-in" data-r="in"></div><div class="sc-say" data-r="say"></div></div>
    <div class="sc-side-info">
      <div class="sc-bar" aria-hidden="true"><i data-r="bar"></i></div>
      <div class="sc-done">${N("check")} \xA1Todo listo para volar!</div>
      <div class="sc-specs"><span class="sc-c"><b>40 \xD7 30 \xD7 20</b> cm</span><span class="sc-c">24 litros</span><span class="sc-c">M\xE1x. 10 kg</span><span class="sc-c">Bajo el asiento</span></div>
      <div data-r="wornbox"><p class="sc-ttl">Puesto en el avi\xF3n</p><div class="sc-worn-l" data-r="worn"></div></div>
      <p class="sc-note">Medidas oficiales del bolso gratuito de Wizz Air, ruedas y asas incluidas. Al marcar algo en la lista, entra en la maleta.</p>
    </div>
  </div>
  <p class="sr-only" aria-live="polite" data-r="live"></p>
</section>`;let e=i=>this.querySelector(`[data-r="${i}"]`);this.$={n:e("n"),t:e("t"),stage:e("stage"),in:e("in"),say:e("say"),bar:e("bar"),worn:e("worn"),wornbox:e("wornbox"),live:e("live"),sec:this.querySelector(".sc"),bagg:this.querySelector(".sc-bagg")},this.$.in.addEventListener("click",i=>{let h=i.target.closest(".sc-t");h&&this.say(h.getAttribute("aria-label"))}),this.mini=document.createElement("button"),this.mini.type="button",this.mini.className="sc-mini",this.mini.innerHTML=`${ot}<span data-r="mn">0/0</span><small>en la maleta</small>`,this.mini.addEventListener("click",()=>this.$.stage.scrollIntoView({behavior:B.matches?"auto":"smooth",block:"center"})),document.body.appendChild(this.mini),"IntersectionObserver"in window&&(this.io=new IntersectionObserver(i=>{for(let h of i)this.visible=h.intersectionRatio>.35,this.mini.classList.toggle("on",!this.visible&&this.ready)},{threshold:[0,.35,.6,1]}),this.io.observe(this.$.stage)),this.onData=()=>this.update(),window.addEventListener("pl26:pack",this.onData),this.update()}disconnectedCallback(){window.removeEventListener("pl26:pack",this.onData),this.io&&this.io.disconnect(),this.mini&&this.mini.remove(),clearTimeout(this.sayT)}say(e){if(!e)return;let i=this.$.say;i.textContent=e,i.classList.add("on"),clearTimeout(this.sayT),this.sayT=setTimeout(()=>i.classList.remove("on"),1700)}update(){let e=window.__plPack;if(!e||!e.items)return;let i=e.items,h=e.packing||{},u=t=>!!(h[t]&&h[t].on),c=new Map(i.map((t,s)=>[t.id,s])),x=i.find(t=>et.test(O(t.label))),w=i.filter(t=>t!==x&&tt.test(O(t.label))),v=i.filter(t=>t!==x&&!w.includes(t)),z=t=>h[t]&&h[t].at||0,b=v.filter(t=>u(t.id)).sort((t,s)=>z(t.id)-z(s.id)||c.get(t.id)-c.get(s.id)),L=new Set(i.filter(t=>u(t.id)).map(t=>t.id)),y=this.prev===null,m=y?[]:[...L].filter(t=>!this.prev.has(t)),K=!y&&!B.matches&&document.visibilityState==="visible"&&m.length>0&&m.length<=6,S=Math.max(v.length,8),q=Math.max(4,Math.ceil(Math.sqrt(S*d.w/d.h))),U=Math.max(1,Math.ceil(S/q));this.$.in.style.setProperty("--tw",100/q+"%"),this.$.in.style.setProperty("--th",100/U+"%");let p=new Set(b.map(t=>t.id));for(let[t,s]of this.tiles)p.has(t)||(this.tiles.delete(t),s.classList.add("out"),setTimeout(()=>s.remove(),280));let g=[];for(let t of b){let s=this.tiles.get(t.id);s||(s=document.createElement("button"),s.type="button",s.className="sc-t",s.setAttribute("aria-label",t.label),s.title=t.label,s.style.setProperty("--cc",_(t)),s.innerHTML=`<i>${N(D(t))}</i>`,this.tiles.set(t.id,s),y||g.push([t,s])),this.$.in.appendChild(s)}let $=this.$.in.querySelector(".sc-empty");b.length?$&&$.remove():$||($=document.createElement("div"),$.className="sc-empty",$.textContent="Vac\xEDa. Marcad cosas en la lista y entrar\xE1n aqu\xED.",this.$.in.appendChild($)),this.$.wornbox.hidden=!w.length,this.$.worn.innerHTML="";for(let t of w){let s=document.createElement("span");s.className="sc-w"+(u(t.id)?" on":"")+(m.includes(t.id)&&!B.matches?" pop":""),s.style.setProperty("--cc",_(t)),s.innerHTML=`<i>${N(D(t))}</i>${Y(R(t.label))}`,this.$.worn.appendChild(s)}let G=L.size,C=i.length;if(this.$.n.textContent=G,this.$.t.textContent="/"+C,this.$.bar.style.width=(C?G/C*100:0)+"%",this.$.sec.classList.toggle("all",C>0&&G===C),this.$.stage.classList.toggle("ok",!!(x&&u(x.id))),this.$.stage.setAttribute("aria-label",`Maleta de 40 \xD7 30 \xD7 20 cm con ${b.length} de ${v.length} cosas dentro`),this.mini.querySelector('[data-r="mn"]').textContent=G+"/"+C,!y&&m.length){let t=m.map(s=>i.find(X=>X.id===s)).filter(Boolean).map(s=>R(s.label));this.$.live.textContent=t.join(", ")+(t.length===1?", a la maleta":": a la maleta")}K&&g.length?g.forEach(([t,s],X)=>this.fly(t,s,X)):!y&&g.length&&!B.matches&&g.forEach(([,t])=>this.pop(t)),!y&&m.length&&x&&m.includes(x.id)&&this.say("Bolso comprobado: 40 \xD7 30 \xD7 20 cm"),this.prev=L,this.ready||(this.ready=!0,this.io&&this.mini.classList.toggle("on",!this.visible))}pop(e){e.classList.remove("wait","pop"),e.offsetWidth,e.classList.add("pop")}bump(e){try{e.animate([{transform:"scale(1,1)"},{transform:"scale(1.03,.95)"},{transform:"scale(.99,1.02)"},{transform:"scale(1,1)"}],{duration:380,easing:"ease-out"})}catch{}}fly(e,i,h){let u=!this.visible&&this.mini.classList.contains("on");i.classList.add("wait");let c=document.createElement("div");c.className="sc-tok"+(u?" fx":""),c.style.setProperty("--cc",_(e)),c.innerHTML=`<span class="sc-tok-ic">${N(D(e))}</span><span class="sc-tok-l">${Y(R(e.label))}</span>`;let x,w,v,z,b;if(u){document.body.appendChild(c);let p=this.mini.getBoundingClientRect();v=p.left+22,z=p.top+p.height/2,x=v,w=p.top-78,b=.32}else{this.$.stage.appendChild(c);let p=this.$.stage.getBoundingClientRect(),g=i.getBoundingClientRect();x=p.width/2,w=p.height*.1,v=g.left-p.left+g.width/2,z=g.top-p.top+g.height/2,b=Math.max(.3,Math.min(1,g.width*.84/46))}let L=c.offsetWidth,y=c.offsetHeight,m=`translate(${x-L/2}px,${w-y/2}px)`,K=`translate(${v-L/2}px,${z-23}px) scale(${b})`;c.style.transformOrigin="50% 23px";let S=h*160,q=u?820:1e3,U=c.querySelector(".sc-tok-l");try{U.animate([{opacity:0},{opacity:1,offset:.18},{opacity:1,offset:.42},{opacity:0,offset:.62},{opacity:0}],{duration:q,delay:S,fill:"both"});let p=c.animate([{transform:m+" scale(.5)",opacity:0},{transform:m+" scale(1.06)",opacity:1,offset:.2},{transform:m+" scale(1)",opacity:1,offset:.42},{transform:K,opacity:1}],{duration:q,delay:S,easing:"cubic-bezier(.5,0,.25,1)",fill:"both"});p.onfinish=()=>{c.remove(),this.pop(i),this.bump(u?this.mini.querySelector("svg"):this.$.bagg)}}catch{c.remove(),this.pop(i)}}}customElements.define("pl-suitcase",nt)})();})();
