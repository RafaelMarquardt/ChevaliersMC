document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
btn?.addEventListener('click',()=> menu.classList.toggle('hidden'))

document.getElementById("zapLink").href = "https://wa.me/" + siteConfig.whatsapp;
document.getElementById("instaLink").href = "https://www.instagram.com" + siteConfig.instagram;
document.getElementById("gmail").href = "mailto:" + siteConfig.gmail;
document.getElementById("end-sede").textContent = siteConfig.endereco;
