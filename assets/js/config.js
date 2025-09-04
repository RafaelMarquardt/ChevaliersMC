window.siteConfig = {
  // dados principais
  whatsapp: "5542999980448",
  instagram: "https://www.instagram.com/chevaliersm.c/", // sempre use URL completa
  logo: "assets/img/brasao-SF.png",
  gmail: "mcchevaliers@gmail.com",
  endereco: "Rua Paraná – Laranjeiras do Sul/PR",



  // Fotos galeria
  foto1: "assets/img/galeria/foto1.png",
  foto2: "assets/img/galeria/foto2.png",
  foto3: "assets/img/galeria/foto3.png",
  foto4: "assets/img/galeria/foto4.png",
  foto5: "assets/img/galeria/foto5.png",
  foto6: "assets/img/galeria/foto6.png",
  foto7: "assets/img/galeria/foto7.png",
  foto8: "assets/img/galeria/foto8.png",

// dados membros
membros: {
   diretoria: [
      { nome: "Guth", funcao: "Presidente", cidade: "Laranjeiras do Sul/PR", foto: "assets/img/membros/cabeca.jpg" },
      { nome: "Burei", funcao: "Vice-Presidente", cidade: "Laranjeiras do Sul/PR", foto: "assets/img/membros/fulano.jpg" },
      { nome: "Trautman", funcao: "Diretor", cidade: "Curitibanos/SC", foto: "assets/img/membros/fulano.jpg" }
    ],
    secretaria: [
      { nome: "Scopel", funcao: "tesoureiro", cidade: "Laranjeiras do Sul/PR", foto: "assets/img/membros/maria.jpg" },
      { nome: "Cabeça", funcao: "2º tesoureiro", cidade: "Pato Branco/PR", foto: "assets/img/membros/maria.jpg", insta: "rafael_cabec" },
      { nome: "Robson", funcao: "Secretario", cidade: "Laranjeiras do Sul/PR", foto: "assets/img/membros/maria.jpg" },
      { nome: "Zocche", funcao: "Cap. Estrada", cidade: "Laranjeiras do Sul/PR", foto: "assets/img/membros/maria.jpg" }
    ],
    gerais: [
      { nome: "Jeferson", funcao: "Membro", cidade: "Laranjeiras do Sul/PR", foto: "assets/img/membros/joao.jpg" },

    ]

},


// fotos album (implementar depois)
  album: [
    "assets/img/album/1.jpg",
    "assets/img/album/2.jpg",
    "assets/img/album/3.jpg",
    "assets/img/album/4.jpg",
    "assets/img/album/5.jpg",
    "assets/img/album/6.jpg"
  ],



// eventos
eventos: [
  {
    titulo: "Café dos Chevaliers – Sede",
    data: "21/09/2025",
    descricao: "Encontro de integração e planejamento de viagens."
  },
  {
    titulo: "Rolê Noturno – Centro → Interior",
    data: "28/09/2025",
    descricao: "Saída da praça central. Tanque cheio e colete."
  },
  {
    titulo: "Ação Solidária – Campanha do Agasalho",
    data: "EM BREVE",
    descricao: "Arrecadação e entrega de agasalhos para famílias da região."
  }
  
]
   
};


// caso queira usar o insta no main.js:
//<a href="https://www.instagram.com/${m.insta || ''}" target="_blank" rel="noopener" class="text-sm text-gray-300"> @${m.insta || ''}</a>