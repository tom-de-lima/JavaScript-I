let itemEmEstoque = 50
let itemVendido = parseInt(prompt("Quantos itens deseja comprar?"))

while (itemEmEstoque !== 0) {
    if (itemVendido <= itemEmEstoque) {
        alert("Compra realizada com sucesso!")
        itemEmEstoque -= itemVendido
        alert("Itens em estoque: " + itemEmEstoque)
        itemVendido = parseInt(prompt("Quantos itens deseja comprar?"))
    }
    else {
        alert("Quantidade indisponível em estoque. Itens em estoque: " + itemEmEstoque)
        itemVendido = parseInt(prompt("Quantos itens deseja comprar?"))
    }
}

alert('Estoque esgotado!')