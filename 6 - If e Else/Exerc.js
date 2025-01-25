
/* Exercício 2: Classificando Números
Descrição:
Crie um programa que peça ao usuário para inserir um número. Use o operador ternário para determinar se o número é positivo, negativo ou zero e exiba a mensagem correspondente.

Requisitos:

Utilize a função prompt() para capturar a entrada do usuário.
Use o operador ternário para definir a mensagem:
"Positivo" se o número for maior que 0.
"Negativo" se o número for menor que 0.
"Zero" se o número for igual a 0.
Exiba a mensagem com alert().*/

let numero = parseInt(prompt('Digite um número: '));

numero > 0 ? alert('Positivo'): numero < 0 ? alert('Negativo') : alert('Zero');