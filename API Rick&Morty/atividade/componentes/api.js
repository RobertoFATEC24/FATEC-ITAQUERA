export async function buscarDados(nome, status) {
    const url = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(nome)}&status=${encodeURIComponent(status)}`;
    
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Erro ao buscar dados');
    }

    const dados = await response.json();
    return dados;  // Retorna os dados da API
}
