// Operadores menos estritos

let num1 = 10;
let num2 = 20;
let value = "10"

alert(num1 == num2);
alert(num1 != num2);

// Operadores mais estritos (comparam, além do valor, o tipo de dado)

alert(num1 === value);
alert(num2 !== value);

// Operadores lógicos

alert((num1 > num2) && (num2 > 0)); // AND
alert((value !== "10") || (10 < 1)); // OR
alert(!10 == 10) // NOT

