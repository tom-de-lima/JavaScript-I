/* Exercício 2: Entrada de Números Positivos
Descrição:
Crie um programa que peça ao usuário para inserir números positivos. Continue pedindo enquanto o usuário não digitar um número negativo. Ao final, exiba a soma de todos os números positivos inseridos.

Requisitos:

Use do...while para garantir que o programa peça pelo menos uma entrada ao usuário.
Utilize prompt() para capturar os números inseridos.
Converta a entrada para número usando parseInt ou Number.
Exiba o total da soma no final com alert().*/

let numeroPositvo = parseInt(prompt("Digite um número positivo: "))
let soma = 0

do {

    if (numeroPositvo >= 0) {
        soma += numeroPositvo
        numeroPositvo = parseInt(prompt("Digite um número positivo: "))
    }
    else{
        alert('Número digitado é negativo')
        break
    }

}while (numeroPositvo >= 0)

    alert('Soma dos números positivos digitados: ' + soma)
   