let playerScore = 0
let computerScore = 0
let rock = 'ROCK';
let paper = 'PAPER';
let scissors = 'SCISSORS';
const crps = ['ROCK','PAPER','SCISSORS'];
var draw = "It's a draw"
    var paperBeatsRock = 'Paper wraps up Rock;'
    var scissorsBeatsPaper = 'Scissors cut Paper;'
    var rockBeatsScissors = 'Rock breaks Scissors;'
    var youWin = ' You Win '
    var youLose = ' You Lose'
function computerPlay() {
    return crps[Math.floor(Math.random() * crps.length)]
}
var playerSelection = window.prompt('Rock, Paper, or Scissors','Rock').toUpperCase() ;
const computerSelection = computerPlay()
//console.log(computerPlay())
function playRound(playerSelction, computerSelection){
    /*var draw = "It's a draw"
    var paperBeatsRock = 'Paper wraps up Rock;'
    var scissorsBeatsPaper = 'Scissors cut Paper;'
    var rockBeatsScissors = 'Rock breaks Scissors;'
    var youWin = ' You Win '
    var youLose = ' You Lose' */
    if (playerSelction == 'ROCK' && computerSelection == 'ROCK'){
      return draw
        //tie++
    } else if (playerSelction == 'ROCK' && computerSelection == 'PAPER'){
        return  paperBeatsRock + youLose
        //computerScore++
    } else if (playerSelction == 'ROCK' && computerSelection == 'SCISSORS'){
        return rockBeatsScissors + youWin
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

//console.log(playRound(playerSelection, computerSelection))
function game(){
    for (let i = 0; i < 5; i++) {
      if (youLose){
         playerScore++
     } if (youLose) {
         computerScore++
     } else {
         tie++
     } console.log(playRound(playerSelection, computerSelection))
        console.log('round ' + i)
}
}
console.group(game())