// FOR: (inicialização; condição; finalização)

for (let indice = 0; indice < 5; indice++) { // de 0 a 9 = 10 poisições para o indice

    alert("Inidice: " + indice)

}

// os parâmetros são opcional
let cont = 0

for (alert("inicialização"); cont < 3; alert("finalização uma iteração")) {
     
    alert("Indice: " + cont)
    cont++
}


// Outra forma

let nome = "João Lucas"

for (let indice = 0; indice < nome.length; indice++) {

    alert("Posição: " + indice + " = " + nome[indice]) // vai imprimir a string "Posição" junto com a variável "indice" junto com cada posição da variável "nome"

}

