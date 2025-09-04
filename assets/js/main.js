// assets/js/main.js
import {
  initYear, initMobileMenu,
  applyInstagramLinks, applyGmailLinks, applyAddress, applyLogos, applyWhatsAppLinks
} from "./init/static.js";

import { renderGaleria }  from "./render/galeria.js";
//import { renderMembros }  from "./render/membros.js";
//import { renderAlbum }    from "./render/album.js";
import { renderEventos }   from "./render/eventos.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inicializações estáticas
  initYear();
  initMobileMenu();
  applyGmailLinks();
  applyInstagramLinks();
  applyAddress();
  applyLogos();

  // Render dinâmico
  renderGaleria();
  //renderMembros();
  renderEventos();
  //renderAlbum();
 

  // Aplicar zap nos demais botões genéricos que não foram setados no render
  applyWhatsAppLinks();
});
