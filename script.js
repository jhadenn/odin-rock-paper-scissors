function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3); // picks a random number between 0 and 2
    const choices = ["rock", "paper", "scissors"] // then chooses from one of three choices
    return choices[randomNumber]
}

function updateScore(result){
    if(result == 'win'){ 
        humanScore++;
    } else if (result == "loss"){
        computerScore++;
    }
    scoreEl.textContent = `Player: ${humanScore} — Computer: ${computerScore}`
}

function updateChoiceImages(humanChoice, computerChoice){
    versusImgs[0].src = `images/${humanChoice}.png`
    versusImgs[1].src = `images/${computerChoice}.png`
}

function playRound(humanChoice, computerChoice){

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

let humanScore = 0, computerScore = 0;
const scoreEl = document.getElementById('score')
const versusContainer = document.querySelector('.container')
const versusImgs = versusContainer.querySelectorAll('.versus-img')

const buttons = document.querySelectorAll('.buttons button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.id
        const computerChoice = getComputerChoice()
        const result = playRound(humanChoice, computerChoice)

        updateChoiceImages(humanChoice, computerChoice)
        updateScore(result)
    }); 
});



