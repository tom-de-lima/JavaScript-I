let metros = parseFloat(prompt("Digite um valor em metros: "));

let convert = parseInt(prompt("Digite a unidade de medida que deseja converter: \n1-mm \n2-cm \n3-dm \n4-dam \n5-hm \n6-km")); 

switch (convert) {
    case 1:
        alert(metros * 1000 + " " + "mm");
        break;
    case 2:
        alert(metros * 100 + " " + "cm");
        break;
    case 3:
        alert(metros * 10 + " " + "dm");
        break;
    case 4:
        alert(metros / 10 + " " + "dam");
        break;
    case 5:
        alert(metros / 100 + " " + "hm");
        break;
    case 6:
        alert(metros / 1000 + " " + "km");
        break;
    default:
        alert("Opção inválida!");
        break;


}