let numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;

        function adivinhar() {
            // Recupera o palpite do usuário
            let palpite = parseInt(document.getElementById("palpite").value);
            tentativas++;

            // Verifica se o palpite está correto
            if (palpite === numeroSecreto) {
                document.getElementById("resultado2").innerHTML = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`;
                document.getElementById("dica").innerHTML = '';
            } else if (palpite < numeroSecreto) {
                document.getElementById("dica").innerHTML = 'Tente um número maior!';
            } else if (palpite > numeroSecreto) {
                document.getElementById("dica").innerHTML = 'Tente um número menor!';
            }
        }