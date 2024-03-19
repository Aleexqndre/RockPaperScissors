let computerSelection
let playerSelection 
let playerPoint = 0;
let computerPoint = 0;
let whoWon
let winer
const body = document.querySelector(`body`)
const winnerDiv = document.createElement(`div`)
const roundDisplay = document.createElement(`p`)
const scoreDisplay = document.createElement(`p`)
body.appendChild(winnerDiv)
winnerDiv.appendChild(roundDisplay)
winnerDiv.appendChild(scoreDisplay)


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
// Fonction permettant l'actualisation de l'affichage des points 
function displayPoints(){
    scoreDisplay.textContent = `Player : ${playerPoint} - ${computerPoint} : Computer`
}
//fonction permettant de savoir qui a gagné + compter les points de chaque rounds
function playRound(playerSelection,computerSelection){
    console.log(playerSelection)
    roundDisplay.textContent = `Player : ${playerSelection} - ${computerSelection} : Computer`
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
function resetScore(){
    playerPoint = 0;
    computerPoint = 0;
    displayPoints()

}
function boutonClique(event) {
        const boutonId = event.target.id;
        playRound(boutonId, getComputerChoice());
        displayPoints()
        if(playerPoint === 5 || computerPoint === 5){
            displayPoints()
            if(playerPoint > computerPoint){
                alert(`You won ${playerPoint} - ${computerPoint}`)
                resetScore()
            }
            else{ 
                alert(`You lose ${playerPoint} - ${computerPoint}`)
                resetScore()
            }
        }
    }
buttons.forEach(function(bouton) {
    bouton.addEventListener('click', boutonClique);});
    

displayPoints()


