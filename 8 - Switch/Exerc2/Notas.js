
/* Exercício 2: Sistema de Notas
Descrição:
Crie um programa que peça ao usuário que insira uma nota (de 0 a 10). Com base na nota, o programa deve classificar o desempenho do usuário utilizando um switch/case:

Nota entre 9 e 10: "Excelente!"
Nota entre 7 e 8: "Bom!"
Nota entre 5 e 6: "Regular!"
Nota abaixo de 5: "Insuficiente!"
Requisitos:

Use prompt() para capturar a nota.
Converta a nota para parseInt.
Utilize intervalos de valores no case, como case 9: e case 10:.
Inclua uma mensagem no default caso a nota inserida esteja fora do intervalo de 0 a 10.
*/

let nota = parseInt(prompt("Digite a nota: "));

let classificacao = 0

if (nota >= 9 && nota <= 10) {
    classificacao = 1
}
else if (nota >= 7 && nota <= 8) {
    classificacao = 2
}
else if (nota >= 5 && nota <= 6) {
    classificacao = 3
}
else if (nota < 5) {
    classificacao = 4
}

switch (classificacao) {
    case 1:
        alert('Excelente!')
        break;
    case 2:
        alert('Bom!')
        break;
    case 3:
        alert('Regular!')
        break;
    case 4:
        alert('Insuficiente!')
        break;  
    default:
        alert('Nota inválida!')      
        break;
}