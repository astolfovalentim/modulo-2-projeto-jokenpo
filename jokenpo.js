// Módulo 2 - Projeto Jokenpô 

const prompt = require("prompt-sync")();

// Váriaveis e listas-------------------------------------------------------------------

const description = (`\n\tBEM-VINDO AO JOGO JOKENPÔ — PEDRA, PAPEL, TESOURA!
\n\t As regras são:
\n\t - Pedra ganha da tesoura, mas perde para o papel;
\n\t - Tesoura ganha do papel, mas perde para a pedra;
\n\t - Papel ganha da pedra, mas perde para a tesoura.
\n\t Você irá jogar contra o computador'.\n\n\tBOA SORTE!\n\n `);
const text1 = (`\n\tFaça sua escolha. Digite pedra, papel ou tesoura:\n\n`);
const options = ["pedra", "papel", "tesoura"];
let pc = 0;
let min = 0;
let max = 3;
let choicePlayer = [];
let pointsPlayer =[];
let pointsPc = [];
let roundsCont = [];
let newgame = 0

// Description-----------------------------------------------------------------------------

console.log (description);
prompt (`Pressione ENTER para começar: `);
console.clear();

while (true) {
  
// Zerar partida para começar novamente----------------------------------------------------
  
  pointsPlayer.splice(0); 
  pointsPc.splice(0);
  roundsCont.splice(0);
  console.clear();
  
// Escolha do número de rodadas---------------------------------------------------------
    
let roundsNum = +prompt(`Digite um número para definir quantas rodadas você quer jogar contra o computador:`); 
console.clear();

// Proteção contra a digitação de valores inválidos

while (roundsNum<=0 || isNaN(roundsNum)) {
    console.log(`O que você digitou é inválido. Tente novamente.`);
    roundsNum = +prompt(`Digite um número para definir quantas rodadas você quer jogar contra o computador:`);
    console.clear();
   
}
console.log(`Você vai jogar ${roundsNum} rodada(s).\n\n`); 
prompt (`Pressione ENTER para continuar: `);
console.clear();

// Definição da quantidade de rodadas--------------------------------------------------

for (let round = 0; round < roundsNum; round++) {
    
  roundsCont.push("1");

//Escolha do PC------------------------------------------------------------------------

min = Math.ceil(min);
max = Math.floor(max);
pc =  Math.floor(Math.random() * (max - min)) + min;
let choicePc = (options[pc]);


// Escolha do jogador-------------------------------------------------------------------

console.log(`\n\tRODADA `+roundsCont.length+text1);
choicePlayer = prompt().trim();
console.clear();

while (!options.includes(choicePlayer)) {
  console.log(`\n'${choicePlayer}' não é uma escolha válida. Digite uma das opções exatamente como está escrito abaixo e em minúsculas: \n\n- 'pedra', \n\n- 'papel', \n\n- 'tesoura'.\n\n`);
  console.log(`Digite novamente: \n\t`);
  choicePlayer = prompt();
  
}
console.clear();

// Exibir escolha do jogador e do computador----------------------------------------------

  console.log(`\n\tVocê escolheu ${choicePlayer}.`);
  console.log(`\n\tO computador escolheu ${choicePc}.\n\n`);
  console.log("RESULTADO:");

//Resultado-------------------------------------------------------------------------------

if (choicePlayer == "pedra") {
  if (choicePc == "pedra") {
    console.log(`\n\tA pedra bateu com a outra pedra.\n\n\tVocê empatou com o computador.\n\n`);

  } else if (choicePc == "papel") {
    console.log(`\n\tO papel embrulhou a pedra. \n\n\tVocê perdeu esta rodada para o computador!\n\n`);
    pointsPc.push("1");
        
  } else if (choicePc == "tesoura"){
    console.log(`\n\tA pedra amassou a tesoura. \n\n\tVocê ganhou esta rodada contra o computador!\n\n`);
    pointsPlayer.push("1");
  
  } 
  
} else if (choicePlayer == "papel") {
  if (choicePc == "papel") {
    console.log(`\n\tPapel contra papel.\n\n\tVocê empatou com o computador.\n\n`);

  } else if (choicePc == "pedra") {
    console.log(`\n\tO papel embrulhou a pedra.\n\n\tVocê ganhou esta rodada contra o computador!\n\n`);
    pointsPlayer.push("1");
        
  } else if (choicePc == "tesoura"){
    console.log(`\n\tA tesoura cortou o papel.\n\n\tVocê perdeu esta rodada para o computador!\n\n`);
    pointsPc.push("1");
  
  } 

} else if (choicePlayer == "tesoura") {
  if (choicePc == "tesoura") {
    console.log(`\n\tTesoura contra tesoura.\n\n\tVocê empatou com o computador.\n\n`);

  } else if (choicePc == "pedra") {
    console.log(`\n\tA pedra amassou a tesoura.\n\n\tVocê perdeu esta rodada para o computador!\n\n`);
    pointsPc.push("1");
        
  } else if (choicePc == "papel"){
    console.log(`\n\tA tesoura cortou o papel.\n\n\tVocê ganhou esta rodada contra o computador!\n\n`);
    pointsPlayer.push("1");
  
  } 
} 

//Placar-------------------------------------------------------------------------------------------------
console.log(`Você marcou ${pointsPlayer.length} ponto(s).`);
console.log(`O computador marcou ${pointsPc.length} ponto(s).`);
prompt (`\nPressione ENTER para continuar: `);
console.clear();

}
// Quantas rodadas ganhas---------------------------------------------------------------------------------

console.log(`Você ganhou ${pointsPlayer.length} rodada(s).`);
console.log(`O computador ganhou ${pointsPc.length} rodada(s).`);

//Determinar o grande vencedor do jogo--------------------------------------------------------------------

if (pointsPlayer.length>pointsPc.length) {
  console.log(`\n\tYOU WINS!!!!\nVocê é o grande campeão do jogo! Parabéns!!!!`);
} else if (pointsPlayer.length==pointsPc.length) {
  console.log(`\n\tEMPATE!! - o jogo terminou empatado!`);
} else if (pointsPlayer.length<pointsPc.length) {
  console.log(`\n\tO computador venceu o jogo. Sorte na próxima vez!`);
}
newgame = prompt(`Se quiser jogar novamente digite SIM, caso contrário, digite qualquer tecla: `).trim().toUpperCase();

  if (newgame != "SIM") {
  
    break;
  }

}
console.log(`\n\tFim do Jogo. Até a próxima!\n\n`);
