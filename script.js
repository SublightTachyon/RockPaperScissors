var winners = [];
const winners =playRound(playerSelection, computerSelection)
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
function computerPlay() {
    return crps[Math.floor(Math.random() * crps.length)]
}
var playerSelection = playerPick();
function playerPick(){ 
   let choice = window.prompt('Rock, Paper, or Scissors','Rock').toUpperCase() ;
   while (choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS'){
      choice = prompt('You have to type Rock, Paper, or Scissors').toUpperCase() ;
   }
       return choice
}
const computerSelection = computerPlay()
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'ROCK' && computerSelection == 'ROCK'){
        return draw
        
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        return  paperBeatsRock + youLose
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        return rockBeatsScissors + youWin
    }  else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        return paperBeatsRock + youWin
    } else if (playerSelction == 'PAPER' && computerSelection == 'PAPER'){
        return draw
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        return scissorsBeatsPaper + youLose
    } else if (playerSelection == 'SCISSORS' && computerSelection =='ROCK' ){
        return rockBeatsScissors + youLose
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        return scissorsBeatsPaper + youWin
    } else if (playerSelection = 'SCISSORS' & computerSelection == 'SCISSORS') {
        return draw
    } else {
        return 'ERROR CODER ONE'
    } 
}
function keepScore(playerSelection, computerSelection){
    var playerScore = 0
    var computerScore = 0
    if (playerSelection == computerSelection){
        return tie += 1 
    }else if((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') 
    || (playerSelection == 'PAPER' && computerSelection =='ROCK') 
    || (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')){
        return playerScore+=1
    } else if ((playerSelection == 'ROCK' && computerSelection == 'PAPER') 
    || (playerSelection == 'PAPER' && computerSelection =='SCISSORS') 
    || (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')){
        return computerScore+=1
    }console.log('CPU '+computerScore);console.log('User '+playerScore)
} 
function game(){
    for (let i = 0; i < 5; i++) {
      console.log(playRound(playerSelection, computerSelection))
        console.log('Player Score '+UserScore)
        console.log('cpu Score '+cpuScore) 
      console.log('ROUND ' + i)
     } 
        

}
console.group(game())