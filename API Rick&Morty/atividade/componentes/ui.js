export function mostrarCard(container, dados) {
    if (dados.results && dados.results.length > 0) {
        dados.results.forEach(item => {
            const card = criarCard(item);
            container.appendChild(card);
        });
    } else {
        const noResults = document.createElement('p');
        noResults.textContent = 'Nenhum personagem encontrado.';
        container.appendChild(noResults);
    }
}

function criarCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${data.image}" alt="${data.name}" class="card-img">
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Status:</strong> ${data.status}</p>
    `;
    return card;
}
