import { $, cfg, onlyDigits } from "../utils/dom.js";

export function renderEventos() {
  const grid = $("#eventosGrid");
  if (!grid || !Array.isArray(cfg.eventos)) return;

  // Já renderiza com o link do WhatsApp (evita timing)
  const zapHref = cfg.whatsapp ? `https://wa.me/${onlyDigits(cfg.whatsapp)}` : "#";

  grid.innerHTML = cfg.eventos.map(e => `
    <article class="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      <div class="p-6">
        <div class="text-xs tracking-wider brand">${e.data || ""}</div>
        <h3 class="mt-1 text-xl font-semibold">${e.nome || ""}</h3>
        <p class="mt-2 text-sm text-gray-300">${e.descricao || ""}</p>
      </div>
      <div class="px-6 pb-6">
        <a href="${zapHref}" target="_blank" rel="noopener"
           class="btn-ghost rounded-md px-4 py-2 inline-block">
          Mais informações
        </a>
      </div>
    </article>
  `).join("");
}