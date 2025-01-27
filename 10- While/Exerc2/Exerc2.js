/* Exercício 2: Jogo de Adivinhação
Descrição:
Crie um programa que escolha aleatoriamente um número entre 1 e 10 (use Math.random() e Math.floor()) e peça ao usuário que tente adivinhar o número. O programa deve continuar pedindo até que o usuário acerte ou deseje desistir.

Requisitos:

Use while para manter o laço ativo até o usuário acertar o número.
Permita ao usuário desistir digitando "0".
Exiba mensagens de feedback para cada tentativa (ex.: "Tente novamente!" ou "Você acertou!").
Use prompt() para capturar as entradas do usuário e alert() para exibir as mensagens.*/

let numeroAleatorio = Math.floor(Math.random() * 10) + 1

/*  Math.random() → Gera número entre 0 e 1.
    Math.random() * 10 → Gera número entre 0 e 9.9999.
    (Math.random() * 10) + 1 → Ajusta o intervalo para 1 a 10.
    Math.floor() → Arredonda para baixo para obter um número inteiro. */

let tentativa = parseInt(
  prompt("Tente adivinhar o número entre 1 e 10 ou digite 0 para sair: ")
)

while (tentativa !== numeroAleatorio) {
  if (tentativa === 0) {
    alert("Saindo do Programa")
    break
  } else {
    tentativa = parseInt(prompt("Tente novamente: "))
  }
}

if (tentativa === numeroAleatorio) {
  alert("Você acertou!")
}
