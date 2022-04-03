const choices = ['rock','paper','scissors'];
const winners = []
function game(){
    for(i = 0 ; i < 5 ; i++) {
        playRound(i);
    }logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
    
}
function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
        input = input.toLowerCase();
        check = validateInput(input);
        while (check == false){
            input = prompt(
                'Type Rock paper, or Scissors Spelling needs to be exact, but case doesn\'t matter'
            );
            input = input.toLowerCase();
            check = validateInput(input);      
        }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    return choices.includes(choice);
}
function checkWinner(choiceP,choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors')||
        (choiceP === 'paper' && choiceC === 'rock')|| 
        (choiceP === 'scissors' && choiceC === 'paper')
    )   {
        return 'Player';
    } else {
        return 'Computer';
        }
}
function logWins(){
    let playerWins = winners.filter((item) => item == 'Player').length
    let computerWins = winners.filter((item) => item == 'Computer').length
    let ties = winners.filter((item) => item == 'Ties').length
    console.log('Results:')
    console.log('Player Wins:',playerWins)
    console.log('Computer Wins:',computerWins)
    console.log('Ties:',ties)
}
function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round: ',round)
    console.log('Player Chose: ',playerChoice)
    console.log('Computer Chose ',computerChoice)
    console.log('Winner: ',winner)
    console.log('-----------------------')
}
