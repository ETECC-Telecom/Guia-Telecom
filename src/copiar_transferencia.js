document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões que têm a classe 'copy-btn'
    const allCopyButtons = document.querySelectorAll('.copy-btn');

    allCopyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Encontra o container pai mais próximo do botão clicado
            const container = event.currentTarget.closest('.copy-container');

            // Dentro do container, encontra o elemento que contém o texto
            const textElement = container.querySelector('.text-to-copy');
            const textToCopy = textElement.innerText; // Pega o texto visível

            // Usa a API do navegador para copiar o texto
            navigator.clipboard.writeText(textToCopy).then(() => {
                // --- Feedback visual para o usuário ---
                const buttonText = button.querySelector('span');
                const buttonIcon = button.querySelector('i');
                const originalText = buttonText.innerText;
                const originalIconClass = buttonIcon.className;

                // Altera o texto e o ícone do botão
                buttonText.innerText = 'Copiado!';
                buttonIcon.className = 'bi bi-check-lg text-success';
                button.classList.add('btn-success');
                button.classList.remove('btn-outline-primary');

                // Retorna ao estado original após 2 segundos
                setTimeout(() => {
                    buttonText.innerText = originalText;
                    buttonIcon.className = originalIconClass;
                    button.classList.remove('btn-success');
                    button.classList.add('btn-outline-primary');
                }, 2000);

            }).catch(err => {
                console.error('Erro ao copiar o texto: ', err);
                // Opcional: Adicionar um feedback de erro para o usuário
                const buttonText = button.querySelector('span');
                const originalText = buttonText.innerText;
                buttonText.innerText = 'Erro!';
                setTimeout(() => {
                    buttonText.innerText = originalText;
                }, 2000);
            });
        });
    });
});