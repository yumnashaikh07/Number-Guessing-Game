#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number - done "tested on 6 cmd"
//2) user will guess a number by giving input -
//3) now, we will compare both number and give result(if/else condition) 
// . RANDOM() generate number between 0-1
//we used Math.floor to not to get value in decimal value
// we set * 10 or any number so we get number between 10 
// wrote + 1 as we didnot want 0 and we wrote 6 +1 so we will get 1 till 6
const randomnumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userguessednumber",
        message: "Please guess a number",
    },
]);
if (answers.userguessednumber === randomnumber) {
    console.log("Congratulations! you guessed Rght Number");
}
else {
    console.log("you guessed Wrong Number");
    console.log(`the correct number is ${randomnumber}`);
}
