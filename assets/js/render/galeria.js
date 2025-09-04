import { $, cfg } from "../utils/dom.js";
// fotos galeria
export function renderGaleria() {
  // espera #foto1..#foto8 com <img> dentro
  for (let i = 1; i <= 8; i++) {
    const src = cfg[`foto${i}`];
    const img = $(`#foto${i} img`);
    if (img && src) img.src = src;
  }
}