let person1 = prompt("Insira o nome do personagem 1: ");
let ataque_person1 = parseFloat(prompt("Insira o poder de ataque do personagem 1"));

let person2 = prompt("Insira o nome do personagem 2: ");
let defesa_person2 = parseFloat(prompt("Insira o poder de defesa do personagem 2"));
let vida_person2 = parseFloat(prompt("Insira a quantidade de pontos de vida do personagem 2"));
let escudo_person2 = prompt("O personagem 2 possui um escudo?: ");

if ((ataque_person1 > defesa_person2) && escudo_person2 == "não") {

    let dano = ataque_person1 - defesa_person2;
    alert("O dano causado ao personagem 2 foi: " + dano);
    let vida = vida_person2 - dano;
    alert("A vida do personagem 2 agora é: " + vida);

}

else if ((ataque_person1 > defesa_person2) && escudo_person2 == "sim"){

    let dano = (ataque_person1 - defesa_person2) / 2;
    alert("O dano causado ao personagem 2 foi: " + dano);
    let vida = vida_person2 - dano;
    alert("A vida do personagem 2 agora é: " + vida);

}
else if (ataque_person1 <= defesa_person2) {

    let dano = 0
    alert("O dano causado ao personagem 2 foi: " + dano);
    let vida = vida_person2 - dano;
    alert("A vida do personagem 2 agora é: " + vida);

}


