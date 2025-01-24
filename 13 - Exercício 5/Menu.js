let menu = parseInt(prompt("Escolha uma opção: \n1 - Saldo \n2 - Extrato \n3 - Pagamentos \n4 - tranferência \n5 - Encerrar"))

do {

    switch (menu) {
        case 1:
            alert("Saldo");
            break;
        case 2:
            alert("Extrato");
            break;
        case 3:
            alert("Pagamentos");
            break;
        case 4:
            alert("Transferência");
            break;
        case 5:
            alert("Programa encerrado. Obrigado por utilizar nossos serviços");
            break;
    }

    menu = parseInt(prompt("Escolha uma opção: \n1 - Saldo \n2 - Extrato \n3 - Pagamentos \n4 - tranferência \n5 - Encerrar"))

} while (menu <= 4);

