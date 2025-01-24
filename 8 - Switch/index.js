let resultado = prompt("Escolha uma alternativa: \n1)a \n2)b \n3)c");

let resultadoNumerico = parseInt(resultado);

switch (resultadoNumerico) {
    case 1:
        alert("Você escolheu a alternativa a");
        break;
    case 2:
        alert("Você escolheu a alternativa b");
        break;
    case 3:
        alert("Você escolheu a alternativa c");
        break;
    default:
        alert("Você não escolheu nenhuma das alternativas");
        break;
}