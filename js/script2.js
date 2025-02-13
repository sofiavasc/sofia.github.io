function fazerConversao() {
    const opcao = document.getElementById("conversao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    let resultado = '';
  
    if (isNaN(valor)) {
        resultado = 'Por favor, insira um valor válido.';
    } else {
        switch (opcao) {
            case 'celsius-fahrenheit':
                resultado = `${valor}°C é igual a ${(valor * 9 / 5) + 32}°F`;
                break;
            case 'metros-centimetros':
                resultado = `${valor} metros é igual a ${valor * 100} centímetros`;
                break;
            case 'quilos-libras':
                resultado = `${valor} quilos é igual a ${(valor * 2.20462).toFixed(2)} libras`;
                break;
            default:
                resultado = 'Opção de conversão inválida.';
        }
    }
  
    document.getElementById("resultado").textContent = resultado;
  }