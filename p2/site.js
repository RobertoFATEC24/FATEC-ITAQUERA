let carrinho = [];
        let produtos = [
            { nome: 'Fonte (110v)', preco: 70.00, quantidade: 180 },
            { nome: 'Fonte (220v)', preco: 80.00, quantidade: 136 },
            { nome: 'Memória RAM', preco: 97.50, quantidade: 206 },
            { nome: 'Memória SSD', preco: 210.00, quantidade: 143 },
            { nome: 'Cabo SATA', preco: 43.50, quantidade: 230 },
            { nome: 'Ventilador', preco: 65.70, quantidade: 110 },
            { nome: 'Processador', preco: 270.00, quantidade: 250 },
            { nome: 'Teclado', preco: 30.00, quantidade: 43 },
            { nome: 'Mouse', preco: 25.00, quantidade: 15 },
            { nome: 'Pen-Drive', preco: 40.00, quantidade: 34 },
            { nome: 'Fone', preco: 60.00, quantidade: 67 },
            { nome: 'Monitor', preco: 540.00, quantidade: 0 },
        ];

        function exibirProdutos(produtosFiltrados = produtos) {
            const productList = document.getElementById('items');
            productList.innerHTML = '';
            produtosFiltrados.forEach((produto) => {
                const div = document.createElement('div');
                div.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)} (Estoque: ${produto.quantidade})`;
                const button = document.createElement('button');
                button.textContent = 'Adicionar ao Carrinho';
                button.classList.add('add-to-cart');
                button.onclick = () => adicionarAoCarrinho(produto.nome);
                div.appendChild(button);
                productList.appendChild(div);
            });
        }

        function adicionarAoCarrinho(nomeProduto) {
            const produto = produtos.find(prod => prod.nome === nomeProduto);
            if (produto && produto.quantidade > 0) {
                carrinho.push(produto);
                produto.quantidade--;
                exibirProdutos();
                exibirCarrinho();
            } else {
                alert('Produto fora de estoque!');
            }
        }

        function removerDoCarrinho(index) {
            const produto = carrinho[index];
            produto.quantidade++;
            carrinho.splice(index, 1);
            exibirProdutos();
            exibirCarrinho();
        }

        function pesquisarProdutos() {
            const searchTerm = document.getElementById('searchbar').value.toLowerCase();
            const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(searchTerm));
            exibirProdutos(produtosFiltrados);
        }

function exibirCarrinho() {
    const cart = document.getElementById('cart');
    cart.innerHTML = '';
    carrinho.forEach((produto, index) => {
        const div = document.createElement('div');
        div.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        const button = document.createElement('button');
        button.textContent = 'Remover';
        button.classList.add('remove');
        button.onclick = () => removerDoCarrinho(index);
        div.appendChild(button);
        cart.appendChild(div);
    });
    calcularTotal();
}

function calcularTotal() {
    const total = carrinho.reduce((total, produto) => total + produto.preco, 0);
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function confirmar() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const confirmacao = confirm('Você deseja confirmar a compra?');
    if (confirmacao) {
        alert('Compra confirmada! Obrigado pela sua compra.');
        carrinho = [];
        exibirProdutos();
        exibirCarrinho();
        calcularTotal();
    } else {
        alert('Compra cancelada.');
    }
}
exibirProdutos();