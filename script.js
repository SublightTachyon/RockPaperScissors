let playerScore = 0
let computerScore = 0
let rock = 'ROCK';
let paper = 'PAPER';
let scissors = 'SCISSORS';
const crps = ['ROCK','PAPER','SCISSORS'];
function computerPlay() {
    return crps[Math.floor(Math.random() * crps.length)]
}
const playerSelection = prompt('Rock, Paper, or Scissors','Rock'.toUpperCase()) ;
const computerSelection = computerPlay()
//console.log(computerPlay())
function playRound(playerSelction, computerSelection){
    let draw = "It's a draw"
    let paperBeatsRock = 'Paper wraps up Rock;'
    let scissorsBeatsPaper = 'Scissors cut Paper;'
    let rockBeatsScissors = 'Rock breaks Scissors;'
    let youWin = ' You Win '
    let youLose = ' You Lose'
    if (playerSelction == 'ROCK' && computerSelection == 'ROCK'){
      return draw
        //tie++
    } else if (playerSelction == 'ROCK' && computerSelection == 'PAPER'){
        return  paperBeatsRock + youLose
        //computerScore++
    } else if (playerSelction == 'ROCK' && computerSelection == 'SCISSORS'){
        return rockBeatsScissor + youWin
        //playerScore++
    }  else if (playerSelction == 'PAPER' && computerSelection == 'ROCK'){
        return paperBeatsRock + youWin
       // playerScore++
    } else if (playerSelction == 'PAPER' && computerSelection == 'PAPER'){
        return draw
        //tie++
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        return scissorsBeatsPaper + youLose
        //computerScore++
    } else if (playerSelection == 'SCISSORS' && computerSelection =='ROCK' ){
        return rockBeatsScissors + youLose
        //computerScore++
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        return scissorsBeatsPaper + youWin
        //computerScore++;
    } else if (playerSelection = 'SCISSORS' & computerSelection == 'SCISSORS') {
        return draw
        //tie++
    } else {
        return 'ERROR CODER ONE'
    }
}

console.log(playRound(playerSelection, computerSelection))
function game(){
        do {
        if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' || playerSelection == 'PAPER' && computerSelection == 'ROCK' || playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
            playerScore ++
        } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'||playerSelection == 'PAPER' && computerSelection == 'SCISSORS'||playerSelection == 'SCISSORS' && computerSelection == 'ROCK'){
            computerScore++
        } else tie++
    } 
    while (computerScore < 3|| playerScore < 3)
    return playRound(playerSelction, computerSelection)
}
console.log(game())
