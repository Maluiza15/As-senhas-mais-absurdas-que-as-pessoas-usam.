document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const checkBtn = document.getElementById('checkBtn');
    const resultMessage = document.getElementById('resultMessage');

    // Lista das piores senhas conhecidas para validação humorística
    const absurdPasswords = [
        '123456', '123456789', 'password', 'senha', '12345', 
        'qwerty', 'mudaeu', 'admin', 'gremio', 'flamengo', 
        'jesus', '111111', 'abc123'
    ];

    checkBtn.addEventListener('click', () => {
        const password = passwordInput.value.trim().toLowerCase();

        // Se o campo estiver vazio
        if (password === '') {
            showResult('Por favor, digite alguma coisa antes que eu perca a paciência! 🙄', 'warning');
            return;
        }

        // Caso 1: Está na lista das piores do mundo
        if (absurdPasswords.includes(password)) {
            showResult(`❌ PARABÉNS! Você escolheu uma das piores senhas do planeta. Um hacker recém-nascido descobriria essa senha em 0.0001 segundos. mude isso agora!`, 'danger');
        } 
        // Caso 2: Curta demais
        else if (password.length < 6) {
            showResult(`⚠️ Menor que 6 caracteres? Isso não é uma senha, é só um convite para ser hackeado. Melhore.`, 'warning');
        } 
        // Caso 3: Parece aceitável
        else {
            showResult(`✅ Olha só! Não conseguimos adivinhar de primeira. Mas certifique-se de que não é o nome da sua mãe ou do seu gato, beleza? 😉`, 'success');
        }
    });

    // Função auxiliar para exibir a mensagem na tela mudando as cores de alerta
    function showResult(text, type) {
        resultMessage.innerText = text;
        resultMessage.className = `result-message ${type}`; // Atualiza as classes CSS dinamicamente
    }
});
