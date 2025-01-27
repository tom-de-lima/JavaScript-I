/* Exercício 1: Contagem Regressiva
Descrição:
Crie um programa que simule uma contagem regressiva de 10 até 0, exibindo cada número no console. Quando o número atingir 0, exiba "Fim da contagem!" e encerre o laço.

Requisitos:

Use um laço while para controlar a contagem regressiva.
Exiba cada número no console usando console.log().
Inclua uma mensagem ao final da contagem para indicar que o programa terminou.*/

let contagem = 10

while (contagem >= 0) {
    alert(contagem)
    contagem--
}

alert("Fim da contagem!")
