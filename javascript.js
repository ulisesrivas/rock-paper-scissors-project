// step #1
// setting up the project structure

console.log("Hello World");


// step #2

// function getComputerChoice() 

// the goal, to get the computer to randomly return rock paper scissors
// hint.. using Math.random
// how can I use Math.random to conditionally return one of the multiple choices
// i believe i am understanding how to return this using an array but its saying this can be done without an array

// Pseudocode
// set up math.random to generate a number between 1 & 3
// if number is 0, then computer displays rock
// else if number is 1, then computer displays paper
// else number is 2, then computer displays scissors
// return computer choice

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;

  if (number == 1) {
    selection = "Rock";
  }
  else if (number ==2) {
    selection = "Paper";
  }
  else if (number == 3) {
    selection = "Scissors";
  }

  console.log(number);
  return selection;
}

console.log(getComputerChoice());

// step #3
// writing the logic to geta human choice
// hint.. assume the user will always enter a valid choice
// hint.. use the prompt method to get user input

function getHumanChoice() {
  choice = prompt("Pick one of the following choices by typing in your answer: 'Rock', 'Paper' or 'Scissors' ");
  return choice;
}

console.log(getHumanChoice());

// the above code prompted my user to enter a choice. the choice was saved into the 'sign' variable and returns it to my console by calling my function getHumanChoice with console.log

// step #4
// i will write variables to keep track of the players score
// initalize variable with the value of 0

let humanScore = 0;
let computerScore = 0;
