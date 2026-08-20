export default function form() {
    const container = document.createElement("div");
    container.innerHTML = `
    <form id="form-post">
        <label for="cep">CEP</label>
        <input type="text" id="cep" placeholder="Digite o CEP">
        <button type="submit">Buscar</button>
    </form>
    `;
    
    // Return the container to use it in the main.js file
    return container;
}
