// ---------- FUNÇÕES GERAIS ---------- //
function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ----- VALIDAR TÍTULO ----- //
let tittleInput = document.getElementById("tittle");
let tittleHelper = document.getElementById("tittle-helper");

// Validar quantidade de caracteres
tittleInput.addEventListener("change", function (e) {
  let valorTittle = e.target.value;
  if (valorTittle.length < 5) {
    // Valor incorreto
    tittleHelper.innerText = "O título deve ter no mínimo 5 caracteres";
    estilizarInputIncorreto(tittleInput, tittleHelper);
  } else {
    //Valor correto
    estilizarInputCorreto(tittleInput, tittleHelper);
  }
});

// ----- Validar username ----- //
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-helper");

// Validar quantidade de caracteres
usernameInput.addEventListener("change", function (e) {
  let valorUsername = e.target.value;
  if (valorUsername.length < 2) {
    // Valor incorreto
    usernameHelper.innerText = "O autor deve ter no mínimo 2 caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper);
  } else {
    //Valor correto
    estilizarInputCorreto(usernameInput, usernameHelper);
  }
});

// ----- Validar mensagem ----- //
let messageInput = document.getElementById("message");
let messageHelper = document.getElementById("message-helper");

// Validar quantidade de caracteres
messageInput.addEventListener("change", function (e) {
  let valorUsername = e.target.value;
  if (valorUsername.length < 10) {
    // Valor incorreto
    messageHelper.innerText = "A mensagem deve ter no mínimo 10 caracteres";
    estilizarInputIncorreto(messageInput, messageHelper);
  } else {
    //Valor correto
    estilizarInputCorreto(messageInput, messageHelper);
  }
});

// ----- Criação de posts na aba comunidade ----- //

const arrayPosts = [];

function createPost(event) {
  // Prevenir o comportamento padrão do formulário
  event.preventDefault();

  // Capturar os valores do input
  const tittleInput = document.getElementById("tittle");
  const usernameInput = document.getElementById("username");
  const messageInput = document.getElementById("message");

  // Criando um novo objeto post
  const newPost = {
    tittle: tittleInput.value,
    username: usernameInput.value,
    message: messageInput.value,
  };

  // Add new post ao arrayPosts
  arrayPosts.push(newPost);

  // Criando o elemento do post
  let post = document.createElement("div");

  // Manipulando o elemento
  post.innerHTML = `
    <h3 class="titulo-postagem">${newPost.tittle}</h3>
    <p class="conteudo-postagem">${newPost.message}</p>
    <div class="info-postagem">
      <span class="autor-postagem">Postado por: ${newPost.username}</span>
    </div>
  `;

  post.classList.add("postagem");

  // Add o elemento à página
  let containerPost = document.querySelector(".postagens");
  containerPost.appendChild(post);

  // Limpando os valores do input
  tittleInput.value = "";
  usernameInput.value = "";
  messageInput.value = "";
}

// Add event listener ao botão "postar-btn"
const postarBtn = document.getElementById("postar-btn");
postarBtn.addEventListener("click", createPost);