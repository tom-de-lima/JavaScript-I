/* Exercício 3: Menu de Opções
Descrição:
Crie um programa que exiba um menu de opções ao usuário. O menu deve conter:

Ver saldo
Depositar dinheiro
Sair
O programa deve continuar exibindo o menu até que o usuário escolha a opção "3" para sair.
Requisitos:

Use do...while para garantir que o menu seja exibido pelo menos uma vez.
Utilize prompt() para capturar a escolha do usuário.
Exiba mensagens apropriadas para cada escolha:
Exibir um saldo fictício para a opção "1".
Solicitar um valor para depósito na opção "2" (não é necessário armazenar o valor).
Encerrar o programa com uma mensagem ao selecionar "3".
Inclua uma mensagem de erro para escolhas inválidas.*/

let escolha = parseInt(prompt("O que deseja fazer?: \n1 - Ver o saldo da conta \n2 - Depositar dinheiro \n3 - Sacar dinheiro \n4 - Sair do programa"));

let saldo = 0;
let sacar = 0;
let depositar = 0;

do{
    escolha = parseInt(
      prompt(
        "O que deseja fazer?: \n1 - Ver o saldo da conta \n2 - Depositar dinheiro \n3 - Sacar dinheiro \n4 - Sair do programa"
      )
    )
    switch(escolha){
        case 1:
            alert(`Seu saldo é de R$ ${saldo}`);
            break
        case 2:
            depositar = parseFloat(prompt("Quanto deseja depositar?"));
            saldo += depositar;
            alert(`Você depositou R$ ${depositar}, seu saldo atual é de R$ ${saldo}`);
            break
        case 3:
            sacar = parseFloat(prompt("Quanto deseja sacar?"));
            if(sacar > saldo){
                alert("Saldo insuficiente");
            }
            else{
                saldo -= sacar;
                alert(`Você sacou R$ ${sacar}, seu saldo atual é de R$ ${saldo}`);
            }
            break
        case 4:
            alert("Programa finalizado");
            break
        default: 
            alert("Opção inválida");   
            break
    }

}while(escolha != 4);