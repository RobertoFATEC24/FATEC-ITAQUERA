function verificar() {
   
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    const nomeValido = nome === "Roberto"; 
    const senhaCorreta = senha === "18082024"; 

    let resultado;
    if (nomeValido && senhaCorreta) {
        resultado = "Acesso Liberado";
    } else {
        resultado = "Acesso Negado";
    }

    document.getElementById('exibir').innerText = `Nome: ${nome}\nSenha: ${senha}\nResultado: ${resultado}`;

    console.log("Tabela Verdade:");
    console.log("Nome Válido | Senha Correta | Resultado");
    console.log(`    ${nomeValido}    |     ${senhaCorreta}     | ${resultado}`);
}
