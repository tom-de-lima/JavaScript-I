// Operadores menos estritos

let num1 = 10;
let num2 = 20;
let value = "10"

alert('10 = 12?' + ' ' + num1 == num2);
alert("10 != 12?" + " " + num1 != num2)

// Operadores mais estritos (comparam, além do valor, o tipo de dado)

alert("10 é o mesmo tipo de '10'?" + " " + num1 === value)
alert("10 é um tipo diferente de '10'?" + " " + num2 !== value)

// Operadores lógicos

alert("(10 > 12) e (12 é > 0)?" + " " + (num1 > num2) && num2 > 0) // AND
alert("('10' != '10') ou (10 < 1)?" + " " + (value !== "10") || 10 < 1) // OR
alert("Negação de 10 é igual a 10?" + " " + !10 == 10) // NOT

