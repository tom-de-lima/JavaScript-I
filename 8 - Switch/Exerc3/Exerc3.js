/* Exercício 3: Escolha de Categoria de Produto
Descrição:
Crie um programa que permita ao usuário escolher uma categoria de produto para ver as opções disponíveis. O programa deve exibir as categorias:

Eletrônicos
Alimentos
Vestuário
Com base na escolha, exiba uma mensagem com exemplos de produtos da categoria selecionada.

Requisitos:

Use prompt() para capturar a escolha do usuário.
Converta a escolha para parseInt.
Utilize switch/case para definir as mensagens de cada categoria.
Exiba uma mensagem no default caso a escolha não seja válida.
*/

let escolha = parseInt(prompt("Escolha uma categoria de produto: \n1 - Eletrônicos \n2 - Alimentos \n3 - Vestuário"));

switch (escolha) {
    case 1:
        alert("Eletrônicos: \n- Celular \n- Notebook \n- Tablet");
        break;
    case 2:
        alert("Alimentos: \n- Arroz \n- Feijão \n- Macarrão");
        break;
    case 3:
        alert("Vestuário: \n- Camiseta \n- Calça \n- Tênis");
        break;
    default:
        alert("Escolha inválida.");
        break;
}
