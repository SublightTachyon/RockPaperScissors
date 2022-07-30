const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

//rockBtn.addEventListener("click", playRound('rock',computerSelection))


let score = 0
function computerPlay()  {
    const choices = ['rock','paper','scissors'];  
    const computerSelection =  choices[Math.floor(Math.random()*choices.length)]
    return computerSelection
 }
 function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return 'tie'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'win'
    } else {
        return 'loss'
    }
 } 
 function trackScore(playerSelection, computerSelection){
     if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
     ) {
         score++;
     } else if (playerSelection === computerSelection) {
         score + 0;
     } else {
         score--;
     }
 }

 //const playerSelection = 'rock'
 const computerSelection = computerPlay()
 function declareVictor(){
    if (score == 0){
        console.log('It was a draw')
    } else if (score > 0){
        console.log('!!! PLAYER WINS !!!')
    } else {
        console.log('!! COMPUTER WINS !!')
    }
 }
 /*function game() {
     for (let i = 1; i <= 5 ; i++){

        const computerSelection = computerPlay()
        const playerSelection = window.prompt('Rock, Paper, or Scissors','Rock').toLowerCase()
        playRound(playerSelection, computerSelection)
        trackScore(playerSelection, computerSelection)
        console.log('Player chose:',playerSelection)
        console.log('Computer chose:',computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        console.log('Player SCORE:',score)
        console.log('round',i)
        console.log('##################')           
     } function declareVictor(){
         if (score == 0){
             console.log('It was a draw')
         } else if (score > 0){
             console.log('!!! PLAYER WINS !!!')
         } else {
             console.log('!! COMPUTER WINS !!')
         }
 }}
 console.log(game())
 console.log(declareVictor()) */
 function playRock(){
    playerSelection ='rock'
    console.log(playRound())
     return playRound(playerSelection, computerSelection)
 }
 rockBtn.addEventListener("click", playRock)