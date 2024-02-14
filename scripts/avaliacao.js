const arrayCards = [
  {
    nome: "Helena Seixas",
    profissao: "Empresária",
    imagem: "/img/regularizar-negocio.png",
    alt: "Imagem de uma mulhar abrindo uma massa",
    texto:
      "Com o workaki eu consegui contratar serviços de manutenção de forma simples e rápida!"
  },
  {
    nome: "Renata Rios",
    profissao: "Estudante",
    imagem: "/img/cliente1.png",
    alt: "Imagem de uma mulhe",
    texto:
      "Consegui encontrar bons professores de Inglês na plataforma!"
  },
  {
    nome: "Fábio Dias",
    profissao: "Professor de Artes",
    imagem: "/img/cliente2.png",
    alt: "Imagem de um homem sorrindo",
    texto:
      "Com o workaki eu consegui encontrar todos os prestadores de serviço para o meu casamento."
  },
  {
    nome: "Ana Peixoto",
    profissao: "Enxadrista",
    imagem: "/img/cliente3.png",
    alt: "Imagem de uma mulher de costas.",
    texto:
      "Gostei da plataforma. Bem simples e direta ao ponto."
  },
  {
    nome: "Artur Andrade",
    profissao: "Personal Trainer",
    imagem: "/img/personal-trainer.png",
    alt: "Imagem de um homem",
    texto:
      "Minha carteira de alunos aumentou em 30% após utilização da plataforma workaki."
  },
];

for (let i = 0; i < arrayCards.length; i++) {
  // criação de elemento
  let card = document.createElement("div");

  // manipulação o elemento
  card.innerHTML = `
          <h3 class="subtitulo">${arrayCards[i].nome}</h3>
          <h4><em>${arrayCards[i].profissao}</em></h4>
          <img src="${arrayCards[i].imagem}" alt="${arrayCards[i].alt}">
          <p class="apresentacao"><em>${arrayCards[i].texto}</em></p>
      `;
  card.classList.add("card");
  // adiciona o elemento à página
  let container = document.querySelector(".card-container");
  container.appendChild(card);
}

let link = document.createElement("div");

link.innerHTML = `
  <a class="link-estilizado" href="#">Ver todas as avaliações de clientes e prestadores de
  serviços.</a>
  `;
let servicos = document.querySelector(".servicos");
servicos.appendChild(link);
