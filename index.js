const computerSelection = getComputerChoice()
const playerSelection = prompt(`Entrez un element rock/paper/scissors`).toLowerCase()
let whoWon

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

function playRound(playerSelection,computerSelection){
    if((playerSelection === "rock" && computerSelection === "scissors")
    ||(playerSelection === "scissors" && computerSelection === "paper")
    ||(playerSelection === "paper" && computerSelection === "rock")){

        return whoWon = `You won ! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection === computerSelection){
        return whoWon = `Tie, you both chose ${playerSelection}`
    }else{
        return whoWon = `You lose ! ${computerSelection} beats ${playerSelection}`
    }

}

console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection,computerSelection))