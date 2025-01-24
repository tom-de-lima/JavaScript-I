const idade = parseInt(prompt("Digite sua idade: ")); // Função utilizada para converter string digitada pelo usuário em número inteiro.

if (idade >= 18) {
    alert("Você é maior de idade!");
} else if (idade > 12) {    
    alert("Você é menor de idade!");
} else if (idade > 4) {
    alert("Você é criança!");
} else {
    alert("Hollyshit");
}

// IF e ELSE Ternário (Forma abreviada):

let valor = prompt ("Digite um valor: ");

valor > 10 ? alert("Maior que 10") : alert("Menor que 10"); // Condição ? Executado se verdadeiro : executado se falso

