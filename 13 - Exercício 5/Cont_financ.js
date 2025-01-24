let saldo = parseFloat(prompt("Qual o saldo inicial? "))
let operacao = 0


do {

    alert("O valor atual é: " + saldo)
    operacao = parseFloat(prompt("Deseja: \n1 - Depositar\n2 - Sacar\n3 - Encerrar\n"))
    switch(operacao) {
        case 1:
            saldo += parseFloat(prompt("Quanto deseja depositar? ")) // saldo = saldo + deposito
            break
        case 2:
            saldo -= parseFloat(prompt("Quanto deseja sacar? ")) // saldo = saldo -sacar
        case 3:
            alert("Programa encerrado.")
            break
        default:
            alert("Operação inválida")
            break
    }    


} while (operacao != 0 && operacao <= 2)