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
      <a class="btn btn-primary" href="https://wa.me/85266801811?text=Hello!%20我想查詢" target="_blank" rel="noopener">WhatsApp</a>
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
