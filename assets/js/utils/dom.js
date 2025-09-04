// ===== Helpers =====

export const cfg = window.siteConfig || {}; // carrega de config.js
export const $  = (sel, root=document) => root.querySelector(sel); 
export const qsa = (sel, root=document) => Array.from(root.querySelectorAll(sel)); 

// remove tudo que não for dígito
export function onlyDigits(s=""){ return String(s).replace(/[^\d]/g, ""); }

