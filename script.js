var ComputerPlay
let randNum = Math.floor(Math.random()*10)
if (randNum % 3 == 0) {
    ComputerPlay = 'Rock'
}    else if (randNum % 3 == 1){
    ComputerPlay = 'Scissors'
} else ComputerPlay = 'Paper'
console.log(ComputerPlay)