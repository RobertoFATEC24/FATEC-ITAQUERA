import form from "./componentes/forms.js";

const container = document.getElementById("app");
container.appendChild(form());

const formularioDom = document.getElementById("form-post");
formularioDom.addEventListener("submit", async (e) => {
    e.preventDefault();  
    const cep = document.getElementById("cep").value;
    await buscaCep(cep); 
});

async function buscaCep(cep) {
    const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(resultado)
    if (resultado.ok){
       alert("Problema na rede")
       return false
    }
    const data = await resultado.json()
    console.log(data)
}

