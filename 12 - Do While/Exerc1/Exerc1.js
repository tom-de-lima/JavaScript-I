
let contagemLancamento = 10

let teste = prompt("Deseja lançar o foguete? (s/n)")

do {
    console.log("Lançamento do Foguete Expanse_1: " + contagemLancamento)
    contagemLancamento--        
} while (contagemLancamento > 0)

    console.log("Foguete Expanse_1 lançado com sucesso!")