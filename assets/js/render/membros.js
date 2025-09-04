import { cfg } from "../utils/dom.js";

export function renderMembros() {
  const categorias = [
    { key: "diretoria", gridId: "gridDiretoria" },
    { key: "secretaria", gridId: "gridSecretaria" },
    { key: "gerais",     gridId: "gridGerais" }
  ];
  const grupos = (cfg.membros) ? cfg.membros : {};

  categorias.forEach(({key, gridId}) => {
    const grid = document.getElementById(gridId);
    const lista = Array.isArray(grupos[key]) ? grupos[key] : [];
    if (!grid || !lista.length) return;

    grid.innerHTML = lista.map(m => `
      <article class="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
        <div class="w-full aspect-square bg-black/40">
          <img src="${m.foto || ""}" alt="${m.nome || ""}" class="w-full h-full object-cover">
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold">${m.nome || ""}</h3>
          <p class="text-sm text-gray-300">${m.funcao || ""}</p>
          <p class="text-xs text-gray-400">${m.cidade || ""}</p>
          ${m.insta ? `
            <a href="${buildInsta(m.insta)}" target="_blank" rel="noopener"
               class="text-xs text-gray-400 hover:text-gray-200 block mt-1">
               @${String(m.insta).replace('https://www.instagram.com/', '').replace(/^\/+/,'')}
            </a>` : ``}
        </div>
      </article>
    `).join("");
  });
}