function calcularResultado() {
    let pontuacao = 0;
    const perguntas = document.forms["quizForm"];

    // Pergunta 1
    if (perguntas["q1"].value === "1") pontuacao++;
    // Pergunta 2
    if (perguntas["q2"].value === "1") pontuacao++;
    // Pergunta 3
    if (perguntas["q3"].value === "1") pontuacao++;
    // Pergunta 4
    if (perguntas["q4"].value === "1") pontuacao++;
    // Pergunta 5
    if (perguntas["q5"].value === "1") pontuacao++;

    // Exibir resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Sua pontuação final é: ${pontuacao} de 5.`;
}