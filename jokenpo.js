const pergunta = require("readline-sync");
var empate = true;
while (empate) {
var escolha = pergunta.question("Pedra....Papel....");
var ppt = ['pedra', 'papel', 'tesoura'];
var random = ppt[Math.floor(Math.random() * 3)];

if ((escolha == 'pedra' && random == 'pedra') ||
    (escolha == 'tesoura' && random == 'tesoura') ||
    (escolha == 'papel' && random == 'papel')) {
    console.log("Voce empatou");
    empate = true;
} else if ((escolha == 'pedra' && random == 'tesoura') ||
    (escolha == 'tesoura' && random == 'papel') ||
    (escolha == 'papel' && random == 'pedra')) {
    console.log("Voce Ganhou!!!");
    empate = false;
} else if ((escolha == 'pedra' && random == 'papel') ||
    (escolha == 'papel' && random == 'tesoura') ||
    (escolha == 'tesoura' && random == 'pedra')) {
    console.log("Voce Perdeu!!!");
    empate = false;
}

console.log("Escolha do computador:", random);
}