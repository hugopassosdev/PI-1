document.getElementById('btnEntrar').addEventListener('click', function() {
    var usuario = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    // Verifica se os campos estão preenchidos
    if (usuario && senha) {
        // Faça aqui a lógica de autenticação, se necessário

        // Login bem-sucedido, navegue para a tela de serviços
        window.location.href = './index.html';
    } else {
        // Exiba uma mensagem se os campos estiverem vazios
        alert('Preencha os campos de usuário e senha.');
    }
});
