        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio do formulário

            // Aqui você pode adicionar validações ou enviar os dados para um servidor

            // Exibe a mensagem de sucesso
            document.getElementById('successMessage').style.display = 'block';

            // Limpa o formulário
            document.getElementById('contactForm').reset();
        });