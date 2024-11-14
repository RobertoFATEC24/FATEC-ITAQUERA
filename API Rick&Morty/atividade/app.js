import { buscarDados } from './componentes/api.js';
import { mostrarCard } from './componentes/ui.js';

document.getElementById('enviar').addEventListener('click', async function() {
    const nome = document.getElementById('nome').value;
    const status = document.getElementById('status').value;

    if (!nome || !status) {
        alert("Por favor, preencha ambos os campos: Nome e Status.");
        return;
    }

    try {
        const dadosExternos = await buscarDados(nome, status);
        const appContainer = document.getElementById('cards-container');
        appContainer.innerHTML = ''; // Limpa os cards antigos
        mostrarCard(appContainer, dadosExternos);
    } catch (error) {
        console.error('Erro ao buscar dados: ', error);
        alert("Erro ao buscar dados, tente novamente.");
    }
});

