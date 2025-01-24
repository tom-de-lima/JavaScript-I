/* Exercício 2: Trabalhando com Constantes
Descrição:
Crie um programa que calcule o preço total de um produto. Para isso, declare uma constante chamada TAXA que represente um imposto fixo de 10%. Declare também uma variável precoBase com o valor base de um produto. O programa deve calcular o preço final com imposto e exibi-lo no console.

Requisitos:

Use const para a taxa, pois ela não será alterada.
Use let para o preço base, pois ele pode ser atualizado.
O nome das variáveis deve seguir o estilo Snake Case.
Exiba o preço final no console com console.log. 
*/

let precoBase = 156.89
const TAXA  = 0.1

console.log('\nValor da taxa: ' + (precoBase * TAXA), '\nPreço final do produto: ' + (precoBase + (precoBase * TAXA)))
