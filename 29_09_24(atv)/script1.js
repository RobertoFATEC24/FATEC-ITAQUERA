function verificarAprovacao() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const faltas = parseInt(document.getElementById('faltas').value);

    const media = (nota1 + nota2) / 2;

    const condicaoNota = media >= 7.0;
    const condicaoFaltas = faltas <= 20;

    let resultado;
    if (condicaoNota && condicaoFaltas) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }

    document.getElementById('exibir').innerText = `Média: ${media.toFixed(2)}\nFaltas: ${faltas}\nResultado: ${resultado}`;

    console.log("Tabela Verdade:");
    console.log("Nota >= 7.0 | Faltas <= 20 | Resultado");
    console.log(`    ${condicaoNota}    |     ${condicaoFaltas}     | ${resultado}`);
}
