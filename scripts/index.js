const arrayCards = [
  {
    servico: "Design Gráfico",
    imagem: "/img/design-grafico.png",
    alt: "Imagem do serviço de Design Gráfico",
  },
  {
    servico: "Soldador",
    imagem: "/img/soldador.png",
    alt: "Imagem do serviço de Soldador",
  },
  {
    servico: "Web Designer",
    imagem: "/img/webdesigner.png",
    alt: "Imagem do serviço de Web Designer",
  },
  {
    servico: "Programador",
    imagem: "/img/programador.png",
    alt: "Imagem do serviço de Programador",
  },
  {
    servico: "Cuidador de pets",
    imagem: "/img/cuidador-de-pets.png",
    alt: "Imagem do serviço de Cuidador de pets",
  },
  {
    servico: "Encanador",
    imagem: "/img/encanador.png",
    alt: "Imagem do serviço de Encanador",
  },
  {
    servico: "Personal Trainer",
    imagem: "/img/personal-trainer.png",
    alt: "Imagem do serviço de Personal Trainer",
  },
  {
    servico: "Reforço escolar",
    imagem: "/img/reforço-escolar.png",
    alt: "Imagem do serviço de Reforço Escolar",
  },
  {
    servico: "Professor de música",
    imagem: "/img/professor-de-musica.png",
    alt: "Imagem do serviço de Professor de Música",
  },
  {
    servico: "Design Gráfico",
    imagem: "/img/design-grafico.png",
    alt: "Imagem do serviço de Design Gráfico",
  },
];

const arrayCardsDinamicos = [
  {
    imagem: "/img/soldador.png",
    alt: "soldador",
    nome: "João Silva",
    profissao: "Soldador",
    texto:
      "Soldador especializado em manutenção de portões, grades e janelas. Garanta durabilidade e segurança para a sua casa!",
  },
  {
    imagem: "/img/webdesigner.png",
    alt: "webdesigner",
    nome: "Helena Peixoto",
    profissao: "Web Designer",
    texto:
      "Crie um site impressionante com nossos serviços de web design. Designs personalizados para atender às suas necessidades online.",
  },
  {
    imagem: "/img/baba.png",
    alt: "babá",
    nome: "Isa Oliveira",
    profissao: "Babá",
    texto:
      "Contrate uma babá confiável para cuidar com carinho e segurança das suas crianças. Paz de espírito para pais ocupados.",
  },
  {
    imagem: "/img/arquiteto.png",
    alt: "arquiteto",
    nome: "Enzo Valentin",
    profissao: "Arquiteto",
    texto:
      "Arquitetura contemporânea com um toque jovem. Soluções inovadoras para espaços que refletem sua personalidade e estilo de vida.",
  },
];

// (1) Criação de cards
for (let i = 0; i < arrayCards.length; i++) {
  // criação de elemento
  let card = document.createElement("div");

  // manipulação o elemento
  card.innerHTML = `
          <h3 class="subtitulo">${arrayCards[i].servico}</h3>
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
  <a class="link-estilizado" href="#">Ver todos os serviços</a>
  `;
let servicos = document.querySelector(".servicos");
servicos.appendChild(link);

// (2) Criação de cards dinâmicos
for (let i = 0; i < arrayCardsDinamicos.length; i++) {
  // criação de elemento
  let cardDinamico = document.createElement("div");

  // manipulação o elemento
  cardDinamico.innerHTML = `
                        <img decoding="async" src="${arrayCardsDinamicos[i].imagem}" alt="${arrayCardsDinamicos[i].alt}">
                        <h3 class="subtitulo">${arrayCardsDinamicos[i].nome}</h3>
                        <h4><em>${arrayCardsDinamicos[i].profissao}</em></h4>
                        <p class="apresentacao"><em>${arrayCardsDinamicos[i].texto}</em></p>
                `;
  cardDinamico.classList.add("anuncios-em-destaque-div-card");
  // adiciona o elemento à página
  let containerCardDinamico = document.querySelector(
    ".anuncios-em-destaque-div"
  );
  containerCardDinamico.appendChild(cardDinamico);
}
