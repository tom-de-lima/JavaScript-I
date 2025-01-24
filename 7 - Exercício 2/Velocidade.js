let nomeVeiculo1 = prompt("Insira o nome do veículo 1: ");
let velo_veiculo1 = parseFloat(prompt("Insira a velocidade do veículo 1: "));
let nomeVeiculo2 = prompt("Insira o nome do veículo 2: ");
let velo_veiculo2 = parseFloat(prompt("Insira a velocidade do veículo 2: "));

if (velo_veiculo1 > velo_veiculo2) {

    alert("O veículo " + nomeVeiculo1 + " está mais rápido que o veículo " + nomeVeiculo2);
} 
else if (velo_veiculo1 < velo_veiculo2) {
    alert("O veículo " + nomeVeiculo2 + " está mais rápido que o veículo " + nomeVeiculo1);
}
else {
    alert("O veículo " + nomeVeiculo1 + " e o veículo " + nomeVeiculo2 + " estão na mesma velocidade");
}