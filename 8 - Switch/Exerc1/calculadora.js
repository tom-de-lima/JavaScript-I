
/* Descrição:
Crie um programa que funcione como uma calculadora simples. O programa deve pedir ao usuário que insira dois números e escolha uma operação entre:

Soma (+)
Subtração (-)
Multiplicação (*)
Divisão (/)
Use um switch/case para determinar qual operação executar com base na escolha do usuário. Exiba o resultado da operação.

Requisitos:

Use prompt() para capturar os dois números e a operação.
Converta os números para parseFloat.
Utilize switch/case para definir a operação.
Exiba o resultado com alert().
Inclua uma mensagem no default caso o usuário escolha uma operação inválida.
*/

let num1 = parseFloat(prompt("Insira o primeiro número: "));
let num2 = parseFloat(prompt("Insira o segundo número: "));

let operacao = parseInt(prompt("Escolha uma operação: \n1)Soma \n2)Subtração \n3)Multiplicação \n4)Divisão"));

switch (operacao) {
    case 1:
        alert('O resultado da soma é: ' + (num1 + num2))
        break;
    case 2:
        alert('O resultado da subtração é: ' + (num1 - num2))
        break
    case 3:
        alert('O resultado da multiplicação é: ' + (num1 * num2))
        break   
    case 4: 
        alert('O resultado da divisão é: ' + (num1 / num2))
        break
    default:
        alert('Operação inválida')
        break
}