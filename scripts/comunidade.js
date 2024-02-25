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
  let valorTittle = e.target.value
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
  let valorUsername = e.target.value
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
  let valorUsername = e.target.value
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
const arrayPosts = [
  {
    tittle: "Três dias sem energia na Rua 2!",
    username: "João Ricardo",
    message: "Amigos, precisamos ser mais incisivos na companhia de energia! Não é possível que eles não tenham um transformador reserva!",
  },
];

for (let i = 0; i < arrayPosts.length; i++) {
  // criação de elemento
  let post = document.createElement("div");

  // manipulação o elemento
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

  post.innerHTML = `
                            <h3 class="titulo-postagem">${arrayPosts[i].tittle}</h3>
                            <p class="conteudo-postagem">${arrayPosts[i].message}</p>
                            <div class="info-postagem">
                              <span class="autor-postagem">Postado por: ${arrayPosts[i].message}</span>
                              <span class="data-postagem">${formattedDate}</span>
                            </div>
                            `;
  post.classList.add("postagem");
  // adiciona o elemento à página
  let containerPost = document.querySelector(
    ".postagens"
  );
  containerPost.appendChild(post);
}
