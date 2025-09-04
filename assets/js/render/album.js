import {$, cfg} from "../utils/dom.js";

export function renderAlbum() {
  const grid = $("#albumGrid");
  if (!grid || !Array.isArray(cfg.album)) return;

  grid.innerHTML = cfg.album.map((src, i) => `
    <figure class="rounded-lg border border-white/10 overflow-hidden bg-white/5">
      <div class="w-full aspect-[4/3] bg-black/40">
        <img src="${src}" alt="Foto do álbum ${i+1}" class="w-full h-full object-contain">
      </div>
    </figure>
  `).join("");
}