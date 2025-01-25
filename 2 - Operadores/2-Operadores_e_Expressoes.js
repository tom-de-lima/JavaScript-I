//Aritiméticos: 

console.log(1 + 1);
console.log(10 / 3);
console.log(10 % 3);
console.log((10 % 3) + (2 * 4));

console.log("--------------------------------------------------------------------------")

//Atribuição: 

let a = 10;

console.log(a);

a += 1;

console.log(a);

a -= 1;

console.log(a);

console.log("--------------------------------------------------------------------------")

//Encadeamento: É o ponto que vem logo após uma função encadeando a funcão a um objeto 'console.log'()'

let num = 10;

console.log(num++); //Apesar de ter incrementado a variável "num" em +1, não é impresso devido a posição do sinal ++ 
console.log(++num);

console.log('-------------------------------------------------------------------------------------------------');

//Concatenação:

console.log("Olá " + "Mundo!");

console.log("Olá " + "Mundo!" + "!");

console.log('Escola' + ' ' + 'de' + ' ' + 'Javascript'[0] + 'Javascript'[4]);

console.log('HTML'[3].length);

console.log((3 + 'Javascrpt'.length) * 'HTML'[2].length + 'CSS'[0] + 10 % 3);


