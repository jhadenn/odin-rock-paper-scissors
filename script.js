function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3); // picks a random number between 0 and 2
    const choices = ["rock", "paper", "scissors"] // then chooses from one of three choices
    return choices[randomNumber]
}

function getHumanChoice() {
        let answer
        let validInputs = ["rock", "paper", "scissors"]
        
        while(!validInputs.includes(answer?.toLowerCase())){
            answer = prompt("Please enter either rock, paper or scissors!")
            if(!validInputs.includes(answer.toLowerCase())){
                alert("Invalid input. Please enter either rock, paper or scissors!")
            }
        }
        return answer
    
}

function playRound(humanChoice, computerChoice, roundsPlayed){

    console.log(`Round ${roundsPlayed}`) 
    if(humanChoice == computerChoice) {
        console.log("Tie!")
        return "tie"
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'||
                humanChoice == 'paper' && computerChoice == 'rock' ||
                humanChoice == 'scissors' && computerChoice =='paper')
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        return "win"
    } else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
        return "loss"
    }

}

function playGame(){
    let roundsPlayed = 1
    let humanScore = 0, computerScore = 0;

    while(roundsPlayed <= 5){
        let outcome = playRound(getHumanChoice(), getComputerChoice(), roundsPlayed);
        if(outcome == "win"){
            humanScore++;
        } else if (outcome == "loss") {
            computerScore++;
        } 
        roundsPlayed++;
    }

    console.log(`Final Score:\n You: ${humanScore} || Computer: ${computerScore}`)

    if(humanScore == computerScore){
        return console.log("It's a tie! GG")
    } else if(humanScore < computerScore) {
        return console.log("You lose! LOL!")
    } else {
        return console.log("You win! GG")
    }
}

playGame()

