def listar_produtos():
    return [
        {"id", 1, "nome", 'pão', "Preço", 2},
        {"id", 4, "nome", 'carne', "Preço", 45}
        {"id", 7, "nome", 'Queijo', "Preço", 12}
        {"id", 3, "nome", 'Alface', "Preço", 24}
    ],

def cadastrar_produtos(preco):
    if (preco >= 0):
        return True
    else:
        