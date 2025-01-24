let palavra = prompt("Digite uma palavra: ")
let palavra_contrario = ""

/* 1 - INICIALIZAÇÃO: Para cada índice (variável `index`) começando no último caractere da variável palavra (`palavra.length - 1`); 
2 - CONDIÇÃO: ir até o primeiro caractere da variável "palavra" (`index >= 0`);
3 - DECREMENTO: diminiua 1 (-1);
faça: */
for (let index = palavra.length - 1; index >= 0; index--) {

        palavra_contrario += palavra[index];
    
}

if (palavra === palavra_contrario) {

    alert(" A palavra " + palavra + " é um palíndromo.");
}
else {
    alert("A palavra não é um palíndromo! \nLida no sentido normal: " + palavra + "\nLida inversamente: " + palavra_contrario)
}

