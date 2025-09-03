// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Ano no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  if (btn && menu) btn.addEventListener("click", () => menu.classList.toggle("hidden"));

  const cfg = window.siteConfig || {};

  // Normaliza URL do Instagram
  function buildInsta(url) {
    if (!url) return "#";
    if (/^https?:\/\//i.test(url)) return url; // já é completa
    // garante exatamente uma barra entre domínio e caminho
    const path = url.startsWith("/") ? url : `/${url}`;
    return `https://www.instagram.com${path}`;
  }

  // Preenche todos os botões/links
  document.querySelectorAll(".zapLink").forEach(a => {
    if (cfg.whatsapp) {
      a.href = "https://wa.me/" + cfg.whatsapp.replace(/[^\d]/g, "");
      a.target = "_blank";
      a.rel = "noopener";
    }
  });

  document.querySelectorAll(".instaLink").forEach(a => {
    a.href = buildInsta(cfg.instagram);
    a.target = "_blank";
    a.rel = "noopener";
  });

  document.querySelectorAll(".gmail").forEach(a => {
    if (cfg.gmail) a.href = "mailto:" + cfg.gmail;
  });

  document.querySelectorAll(".end-sede").forEach(el => {
    el.textContent = cfg.endereco ? cfg.endereco : "";
  });

  // Troca logos (se você colocar class="logoImg" nas <img> da logo)
  document.querySelectorAll(".logoImg").forEach(img => {
    if (cfg.logo) img.src = cfg.logo;
  });

  // Galeria: usa #foto1..#foto8 como você já tem no HTML
  for (let i = 1; i <= 8; i++) {
    const src = cfg[`foto${i}`];
    const img = document.querySelector(`#foto${i} img`);
    if (img && src) img.src = src;
  }
});
