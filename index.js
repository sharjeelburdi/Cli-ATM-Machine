#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 1234;
let myBalance = 5000;
console.log("Welcome to my ATM Machine");
let enterPin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin : ",
    },
]);
if (enterPin.pin === myPin) {
    console.log(`Login Successful`);
    let actions = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select any action to perform",
            choices: ["Withdraw Money", "Check Balance"],
        },
    ]);
    if (actions.operation === "Withdraw Money") {
        let money = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw",
            },
        ]);
        if (money.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= money.amount;
            console.log(`${money.amount} Withdrawn Successfully,\nYour Remaining Balance is ${myBalance}`);
        }
    }
    else if (actions.operation === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin! Try Again");
}
