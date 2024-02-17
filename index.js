let computerSelection
let playerSelection 
let playerPoint = 0;
let computerPoint = 0;
let whoWon
let winer

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
        playerPoint = playerPoint +1;
        return whoWon = `You won ! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection === computerSelection){
        return whoWon = `Tie, you both chose ${playerSelection}`
    }else{
        computerPoint = computerPoint + 1;
        return whoWon = `You lose ! ${computerSelection} beats ${playerSelection}`
    }

}

function playGame(){
    for(let i = 0 ; i < 5; i++){

        computerSelection = getComputerChoice()
        playerSelection = prompt(`Entrez un element Rock/paper/scissors`)
        console.log(playerSelection)
        console.log(computerSelection)
        playRound(playerSelection,computerSelection)
        console.log(whoWon)
        console.log(playerPoint)
        console.log(computerPoint)
    }
    if(playerPoint > computerPoint){
        console.log(`You won ${playerPoint} - ${computerPoint}`)
    }else{
        console.log(`You lose ${playerPoint} - ${computerPoint}`)
    }

}

playGame()

