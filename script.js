/*
  Classificador de nível de herói
  Autor: José Welton Gonçalo de Sousa
  Licença: MIT
*/
// Importar bibliotecas
const prompt = require("prompt-sync")()

// Exibe no console o nome da aplicação
console.log("|------> Classificador de Nível de Herói <------|" )

// Função que classifica o nível de heroi de acordo com os pontos de experiência
function classificadorNivel(xp){
    /*
    Se XP for menor do que 1.000 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 5.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = Radiante
    */
    if (xp <= 1000){
         return "Ferro"
    }else if (xp > 1000 && xp <= 2000){
        return "Bronze"
    }else if (xp > 2000 && xp <= 5000){
        return "Prata"
    }else if (xp > 5000 && xp <= 7000){
        return "Ouro"
    }else if (xp > 7000 && xp <= 8000){
        return "Platina"
    }else if (xp > 8000 && xp <= 9000){
        return "Ascendente"
    }else if (xp > 9000 && xp <= 10000){
        return "Imortal"
    }else{
        return "Radiante"
    }
}

let continuaLoop = "s"
while(continuaLoop === "s"){
    // Solicita ao usuário nome e pontos de esperência do personagem
    let nome = prompt("Digite o nome do herói ou heroína: ")
    let exp = prompt("Digite o número de Pontos de Experiência (XP): ")

    // Chamada da função
    let nivel = classificadorNivel(exp)

    // Imprime na tela o resultado
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`)

    continuaLoop = prompt("Deseja executar uma nova consulta? (Digite 's' para sim ou 'n' para não.)")
}

