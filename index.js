#!/usr/bin/env node
import inquirer from "inquirer";
//Computer will generate the random number
//User input for guessing number 
//Compare user input with computer generated random number and show the result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number  between : 1-10",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! your guessed number is correct.");
}
else {
    console.log("Ops! your guessed number is wrong.");
}
