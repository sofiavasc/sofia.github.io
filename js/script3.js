document.getElementById('formIMC').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Determinar a classificação
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Normal';
    } else if (imc >= 24.92 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    // Exibir os resultados
    document.getElementById('imc').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
    document.getElementById('classificacao').textContent = `Classificação: ${classificacao}`;
});