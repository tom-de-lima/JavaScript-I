let multiplicando = parseInt(prompt("Digite um número para obter a tabuada: "))
let resultado = 0
let tabuada = ""

for (let multipicador = 1; multipicador <= 20; multipicador++) {

    resultado = multiplicando * multipicador
    tabuada += multiplicando + "x" + multipicador + "=" + resultado + "\n"

}

alert(tabuada)
