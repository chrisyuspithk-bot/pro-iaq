(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  const header = `
  <div class="nav-inner">
    <a class="logo" href="index.html" aria-label="Pro-IAQ 首頁"><img src="assets/logo.png" alt="Pro-IAQ 專業室內空氣質素有限公司"></a>
    <button class="burger" aria-label="開啟選單"><span></span><span></span><span></span></button>
    <ul class="menu">
      <li><a href="index.html" data-page="index.html">首頁</a></li>
      <li>
        <a href="luko.html">產品系列</a>
        <div class="drop">
          <a href="luko.html">LUKO 天花抽濕機系列</a>
          <a href="smartvent.html">SmartVent 掛牆式鮮風系列</a>
          <a href="airproce.html">醫療級空氣清新機系列</a>
          <a href="s9.html">S9 寵物環境淨化系列</a>
          <a href="shop.html">STERiZAR 及其他產品</a>
        </div>
      </li>
      <li>
        <a href="services.html">專業服務</a>
        <div class="drop">
          <a href="rental.html">空氣淨化機租用</a>
          <a href="services.html#air-test">室內空氣質素檢測</a>
          <a href="services.html#hcho">除甲醛服務</a>
          <a href="services.html#disinfection">消毒殺菌服務</a>
          <a href="digital-twin.html">ESG 綠色能源大廈管理</a>
        </div>
      </li>
      <li><a href="shop.html" data-page="shop.html">商店</a></li>
      <li><a href="contact.html" data-page="contact.html">聯絡我們</a></li>
    </ul>
    <div class="nav-cta">
      <a class="phone" href="tel:+85226820366">852 2682 0366</a>
      <a class="btn btn-primary" href="https://wa.me/85266801811?text=Hello!%20我想查詢" target="_blank" rel="noopener"><svg class="wa-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WhatsApp</a>
    </div>
  </div>`;

  const footer = `
  <div class="wrap foot-grid">
    <div>
      <img src="assets/logo.png" alt="Pro-IAQ" style="height:48px">
      <p style="margin-top:14px">一站式改善室內空氣質素：甲醛檢測、消毒殺菌、除甲醛、專業級空氣清新機租購，以及天花抽濕機安裝。</p>
    </div>
    <div>
      <h4>產品</h4>
      <ul>
        <li><a href="luko.html">LUKO 天花抽濕機</a></li>
        <li><a href="smartvent.html">SmartVent 鮮風淨化</a></li>
        <li><a href="airproce.html">AirProce 醫療級淨化</a></li>
        <li><a href="shop.html">STERiZAR 消毒產品</a></li>
      </ul>
    </div>
    <div>
      <h4>服務</h4>
      <ul>
        <li><a href="rental.html">設備租用</a></li>
        <li><a href="services.html#air-test">空氣檢測</a></li>
        <li><a href="services.html#hcho">除甲醛</a></li>
        <li><a href="services.html#disinfection">深層消毒</a></li>
      </ul>
    </div>
    <div>
      <h4>聯絡</h4>
      <ul>
        <li>火炭黃竹洋街14-18號<br>華生工業大廈 5 樓 503 室</li>
        <li><a href="tel:+85226820366">Tel. 852-2682 0366</a></li>
        <li><a href="https://wa.me/85266801811?text=Hello!%20我想查詢" target="_blank" rel="noopener"><svg class="wa-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp 852 6680 1811</a></li>
        <li><a href="mailto:info@pro-iaq.com">info@pro-iaq.com</a></li>
        <li><a href="https://www.instagram.com/pro.iaq_hk/" target="_blank" rel="noopener">Instagram</a> · <a href="https://www.facebook.com/ProIAQ" target="_blank" rel="noopener">Facebook</a> · <a href="https://www.youtube.com/channel/UC4YN7Dem517LB-tCsEQGZ5A" target="_blank" rel="noopener">YouTube</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap legal">
    <span>COPYRIGHT © 2024 Pro-IAQ Limited. ALL RIGHT RESERVED</span>
  </div>`;

  const nav = document.getElementById("site-nav");
  const foot = document.getElementById("site-foot");
  if(nav) nav.innerHTML = header;
  if(foot) foot.innerHTML = footer;

  document.querySelectorAll(".menu a").forEach(a=>{
    const href = a.getAttribute("href")||"";
    if(href === path || (path==="" && href==="index.html")) a.classList.add("active");
  });
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  if(burger && menu) burger.addEventListener("click", ()=> menu.classList.toggle("open"));

  // air particles on hero
  const canvas = document.querySelector(".air");
  if(canvas && canvas.getContext && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    const ctx = canvas.getContext("2d");
    const resize=()=>{canvas.width=canvas.offsetWidth;canvas.height=canvas.offsetHeight};
    resize(); addEventListener("resize", resize);
    const n = 48;
    const dots = Array.from({length:n},()=>({
      x:Math.random(), y:Math.random(), r: Math.random()*1.8+0.4,
      s: Math.random()*0.00035+0.00012, a: Math.random()*0.35+0.08
    }));
    let t=0;
    (function tick(){
      t++; ctx.clearRect(0,0,canvas.width,canvas.height);
      dots.forEach(d=>{
        d.y -= d.s; if(d.y<0) d.y=1;
        d.x += Math.sin((t/180)+d.y*8)*0.0004;
        ctx.beginPath();
        ctx.fillStyle=`rgba(255,255,255,${d.a})`;
        ctx.arc(d.x*canvas.width, d.y*canvas.height, d.r, 0, Math.PI*2);
        ctx.fill();
      });
      requestAnimationFrame(tick);
    })();
  }
})();
