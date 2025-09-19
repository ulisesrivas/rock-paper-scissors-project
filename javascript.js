console.log("Hello World");

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
  // console.log(number);
  // console.log(selection);
}

console.log(getComputerChoice());

