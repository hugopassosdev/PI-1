const arrayCards = [
  {
    curso: "Panificação I",
    imagem: "/img/regularizar-negocio.png",
    alt: "Imagem de uma mulhar abrindo uma massa",
  },
  {
    curso: "Web Designer I",
    imagem: "/img/webdesigner.png",
    alt: "Imagem de um  Web Designer",
  },
  {
    curso: "Lógica I",
    imagem: "/img/programador.png",
    alt: "Imagem de um Programador",
  },
  {
    curso: "Finanças para MEI",
    imagem: "/img/gestao-financeira.png",
    alt: "Imagem de um notebook com gráficos",
  },
  {
    curso: "Criação de currículo",
    imagem: "/img/curriculo.png",
    alt: "Imagem de um currículo",
  },
];

for (let i = 0; i < arrayCards.length; i++) {
  // criação de elemento
  let card = document.createElement("div");

  // manipulação o elemento
  card.innerHTML = `
        <h3 class="subtitulo">${arrayCards[i].curso}</h3>
        <img src="${arrayCards[i].imagem}" alt="${arrayCards[i].alt}">
        <a href="#">Saiba mais</a>
    `;
  card.classList.add("card");
  // adiciona o elemento à página
  let container = document.querySelector(".card-container");
  container.appendChild(card);
}

let link = document.createElement("div");

link.innerHTML = `
<a class="link-estilizado" href="#">Ver todos os cursos</a>
`;
let servicos = document.querySelector(".servicos");
servicos.appendChild(link);
