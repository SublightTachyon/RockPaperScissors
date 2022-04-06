//declare some variables that will be used in the code.
const shoot = ['rock','paper','scissors']
var Cselect = comPlay()
var Pselect = humanPlay()
var draw = 0
var loss = 0
var win = 0
// function comPlay that returns rock, paper or scissors

function comPlay(){
    return shoot[Math.floor(Math.random()* shoot.length)]
}

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
function humanPlay(){
    let choice = window.prompt('rock, paper, or scissors','rock').toLowerCase();
    while (
        choice !=='rock' && choice !=='paper' && choice !=='scissors'
    ){
        choice = window.prompt('you have to type rock, paper, or scissors. Correct spelling, case insenstive.')
    } return choice;
}
console.log('Player chose:',Pselect)
console.log('Computer chose:',Cselect)
// Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so:
// "You Lose! Paper beats Rock"
function singleRound(Pselect,Cselect){
    if (Pselect = Cselect){
        console.log('Tie');
        return draw
    } else if (
        (Pselect === 'rock' && Cselect === 'scissors')||
        (Pselect === 'paper' && Cselect === 'rock')||
        (Pselect === 'scissors' && Cselect === 'paper')
    ) {
        console.log('You Win')
        return win
    } else if (
        (Pselect === 'rock' && Cselect === 'paper') ||
        (Pselect === 'paper' && Cselect ==='scissors') ||
        (Pselect === 'scissors' && Cselect === 'rock')
    ) {
        console.log('You lose');
        return loss
    } else {console.log('ERROR FUNCTION SINGLE ROUND')}
}
console.log(singleRound(Pselect,Cselect))

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//function playRound(comPlay,humanPlay)

//function humanPlay that take input from the player rock paper or scissors use prompt()

//function humanPlay(){
//
//}

//write a function called game() call playRound() inside of game() to play a five round game
//and report a winner or loser at the end

//game(){
//
//}