var cpuScore = 0
var userScore = 0
var tie = 0
const crps = ['ROCK','PAPER','SCISSORS'];
var draw = "It's a draw"
    var paperBeatsRock = 'Paper wraps up Rock';
    var scissorsBeatsPaper = 'Scissors cut Paper';
    var rockBeatsScissors = 'Rock breaks Scissors';
    var youWin = ' You Win ';
    var youLose = ' You Lose';
    var UserScore = playerScore;
    var cpuScore = computerScore;
    var playerScore = 0
    var computerScore = 0
        const computerSelection = computerPlay()
        const playerSelection = playerPick()

    function computerPlay() {
    

    return crps[Math.floor(Math.random() * crps.length)]
}

function playerPick(){ 
   let choice = window.prompt('Rock, Paper, or Scissors','Rock').toUpperCase() ;
   while (choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS'){
      choice = prompt('You have to type Rock, Paper, or Scissors').toUpperCase() ;
   }
       return choice
}
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'ROCK' && computerSelection == 'ROCK'){
       tie++;
        return draw
        
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        cpuScore++;
        return  paperBeatsRock + youLose
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        userScore++;
        return rockBeatsScissors + youWin
    }  else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        userScore++;
        return paperBeatsRock + youWin
    } else if (playerSelection == 'PAPER' && computerSelection == 'PAPER'){
        tie++;
        return draw
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        cpuScore++;
        return scissorsBeatsPaper + youLose
    } else if (playerSelection == 'SCISSORS' && computerSelection =='ROCK' ){
        cpuScore++;
        return rockBeatsScissors + youLose
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        userScore++;
        return scissorsBeatsPaper + youWin
    } else if (playerSelection = 'SCISSORS' & computerSelection == 'SCISSORS') {
        tie++;
        return draw
    } else {
        return 'ERROR CODER ONE'
    } 
}
function game(){
    for (let i = 1; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection))
        console.log('Player Score ',userScore)
        console.log('cpu Score ',cpuScore) 
        console.log('ROUND ' + i)
     }         

}
console.log(game())