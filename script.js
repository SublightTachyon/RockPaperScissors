let playerScore = 0
let computerScore = 0
    let rock = 'ROCK';
    let paper = 'PAPER';
    let scissors = 'SCISSORS';
    /*let randNum= Math.random();
     ComputerPlay(){
    if (randNum > 0.33) {
        return  rock;
    }   else if (randNum  > 0.66){
        return  paper;
    }   else {
        return  scissors;
    }

    
}*/
const crps = ['ROCK','PAPER','SCISSORS'];
function computerPlay() {
    return crps[Math.floor(Math.random() * crps.length)]
}
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
const playerSelection = prompt('Rock, Paper, or Scissors','Rock'.toUpperCase()) ;
const computerSelection = computerPlay()
//console.log(playRound(playerSelection, computerSelection))
//let playerScore = 0
//let computerScore = 0
function game(){
    return playRound(playerSelection, computerSelection)/*
} if (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Scissors' && computerSelection == 'Paper'|| playerSelection == 'Paper' && computerSelection == 'Rock'){
    playerScore += 1
} else if (playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Scissors'){
    computerScore += 1
} else tie += 1 */
while (computerScore < 3 || playerScore < 3){
    playRound()
}
console.log(game())
/* write a function called game() the keeps track of the score an plays best out of five round of Rock, Paper, Scissors.
call playround inside game. check status of playRound*/
