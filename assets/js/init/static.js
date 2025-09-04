import { $, qsa, cfg, onlyDigits} from "../utils/dom.js";


// atualiza ano no rodapé
export function initYear() {
  const el = $("#year");
  if (el) el.textContent = new Date().getFullYear();
}

// menu mobile
export function initMobileMenu() {
  const btn  = $("#menuBtn");
  const menu = $("#mobileMenu");
  if (btn && menu) btn.addEventListener("click", () => menu.classList.toggle("hidden"));
}

// ===== Aplicadores =====

// aplica links de WhatsApp (classe zapLink)
export function applyWhatsAppLinks() {
  const zap = onlyDigits(cfg.whatsapp || "");
  if (!zap) return;
  qsa(".zapLink").forEach(a => {
    a.href = `https://wa.me/${zap}`;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// aplica links de Instagram (classe instaLink)
export function applyInstagramLinks() {
  const href = cfg.instagram;
  qsa(".instaLink").forEach(a => {
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// aplica links de email (classe gmailLink)
export function applyGmailLinks() {
  if (!cfg.gmail) return;
  qsa(".gmailLink").forEach(a => {
    a.href = `mailto:${cfg.gmail}`;
  });
}

// aplica endereço (classe end-sede)
export function applyAddress() {
  qsa(".end-sede").forEach(el => {
    el.textContent = cfg.endereco || "";
  });
}

// aplica logo (classe logoImg)
export function applyLogos() {
  if (!cfg.logo) return;
  qsa(".logoImg").forEach(img => { img.src = cfg.logo; });
}
