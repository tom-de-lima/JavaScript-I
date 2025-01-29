/* Exercício 3: Controle de Estoque
Descrição:
Simule um sistema de controle de estoque. O programa deve começar com uma quantidade inicial de 50 itens. A cada iteração, pergunte ao usuário quantos itens ele deseja retirar. Atualize o estoque e exiba a quantidade restante. O laço deve terminar quando o estoque chegar a zero ou o usuário inserir "0" como quantidade.

Requisitos:

Use while para manter o controle até que o estoque seja zerado.
Valide as entradas do usuário para evitar números maiores que o estoque disponível.
Inclua uma mensagem ao final indicando que o estoque acabou ou que a operação foi encerrada pelo usuário.
Utilize alert() para exibir mensagens e prompt() para capturar entradas.*/

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