let nome = prompt("Qual seu nome: ")
let cidades = ""
let contagem = 0

let cidade = prompt("Você já visitou alguma cidade? (sim/não)  ")

while (cidade === "sim") {
    
    contagem++
    let nome_cidade = prompt("Qual o nome da cidade visitada? ")
    cidades += " - " + nome_cidade + "\n"
    cidade = prompt("Você já visitou alguma outra cidade? (sim/não)  ")
   
}

alert("Turista: " + nome +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades)
