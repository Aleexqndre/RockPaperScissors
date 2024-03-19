let computerSelection
let playerSelection 
let playerPoint = 0;
let computerPoint = 0;
let whoWon
let winer


const buttons = document.querySelectorAll(`button`)

// function pour generer un element aléatoirement 
function getRandomInt() {
    return Math.floor((Math.random() * 3)+1);
}
function getComputerChoice(){
    let randomNumber = getRandomInt()
    if(randomNumber === 1){
        return aiChoice = "scissors"
    }else if(randomNumber === 2){
        return aiChoice = "paper"
    }else if(randomNumber === 3){
        return aiChoice = "rock"
    }
}
//fonction permettant de savoir qui a gagné + compter les points de chaque rounds
function playRound(playerSelection,computerSelection){
    if((playerSelection === "rock" && computerSelection === "scissors")
    ||(playerSelection === "scissors" && computerSelection === "paper")
    ||(playerSelection === "paper" && computerSelection === "rock")){
        playerPoint = playerPoint +1;
        return whoWon = `You won ! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection === computerSelection){
        return whoWon = `Tie, you both chose ${playerSelection}`
    }else{
        computerPoint = computerPoint + 1;
        return whoWon = `You lose ! ${computerSelection} beats ${playerSelection}`
    }
    
}
//Fonction permettant de lancer une partie en 5 round et d'afficher le vainqueur a la fin
function playGame(playerSelection){
    /*for(let i = 0 ; i < 5; i++){
    }*/
    computerSelection = getComputerChoice()
    console.log(playerSelection)
    console.log(computerSelection)
    playRound(playerSelection,computerSelection)
    console.log(whoWon)
    console.log(playerPoint)
    console.log(computerPoint)
    if(playerPoint > computerPoint){
        console.log(`You won ${playerPoint} - ${computerPoint}`)
    }else{
        console.log(`You lose ${playerPoint} - ${computerPoint}`)
    }

}
function boutonClique(event) {
        const boutonId = event.target.id;
        playGame(boutonId);
        // Vous pouvez ajouter ici le code que vous souhaitez exécuter lorsque n'importe quel bouton est cliqué
    }
buttons.forEach(function(bouton) {
    bouton.addEventListener('click', boutonClique);});
    



