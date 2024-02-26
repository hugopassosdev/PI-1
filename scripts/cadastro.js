
document.getElementById('botaoCriar').addEventListener('click', function(event) {
    // Prevenir o comportamento padrão do botão para evitar que a página seja recarregada
    event.preventDefault();

    // Verificar se os campos de email, senha e confirmação de senha estão preenchidos
    var email = document.getElementById('email').value;
    var senha = document.getElementById('Senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    if (email && senha && confirmarSenha) {
        // Verificar se o checkbox de aceitar política de privacidade está marcado
        var politicaCheckbox = document.getElementById('politica');
        if (politicaCheckbox.checked) {
            // Verificar se é prestador
            var prestadorCheckbox = document.getElementById('prestador');
            if (prestadorCheckbox.checked) {
                // Se for prestador, adicione os campos adicionais (CEP e profissão)
                var cep = prompt('Digite seu CEP:');
                var profissao = prompt('Digite sua profissão:');
                console.log('CEP:', cep);
                console.log('Profissão:', profissao);
            }

            // Navegar para a tela de index.html
            window.location.href = "./index.html";
        } else {
            alert('Você precisa aceitar as políticas de privacidade.');
        }
    } else {
        alert('Preencha todos os campos obrigatórios.');
    }
});

