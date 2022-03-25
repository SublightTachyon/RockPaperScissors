
    let rock = 'Rock';
    let paper = 'Paper';
    let scissors = 'Scissors';
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
const crps = ['Rock','Paper','Scissors'];
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
    if (playerSelction == 'Rock' && computerSelection == 'Rock'){
      return draw
    } else if (playerSelction == 'Rock' && computerSelection == 'Paper'){
        return  paperBeatsRock + youLose
    } else if (playerSelction == 'Rock' && computerSelection == 'Scissors'){
        return rockScissor + youWin
    }  else if (playerSelction == 'Paper' && computerSelection == 'Rock'){
        return paperBeatsRock + youWin
    } else if (playerSelction == 'Paper' && computerSelection == 'Paper'){
        return draw
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return scissorsBeatsPaper + youLose
    } else if (playerSelection == 'Scissors' && computerSelection =='Rock' ){
        return rockBeatsScissors + youLose
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        return scissorsBeatsPaper + youWin
    } else if (playerSelection = 'Scissors' & computerSelection == 'Scissors') {
        return draw
    } else {
        return 'ERROR CODER ONE'
    }
}
const playerSelection = prompt('Rock, Paper, or Scissors','Rock') ;
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))