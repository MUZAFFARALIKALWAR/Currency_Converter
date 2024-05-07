#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright `\n\t<<<<<<========================*$**$**$**$**$**$**$**$**$**$**$**$**$**=========================>>>>>>\n`);
console.log(chalk.greenBright `\t<<<<===============~~~~ WELLCOME TO CURRENCY CONVERTOR BY MUZAFFAR ALI KALWAR ~~~~===============>>>>`);
console.log(chalk.yellowBright `\n\t<<<<<<========================*$**$**$**$**$**$**$**$**$**$**$**$**$**=========================>>>>>>\n`);
let Converted_History = [];
// Define the list of currencies and their exchangs rates
// Recorded Date 7-5-2024
let exchangs_rates = {
    "USD": 1,
    "EUR": 0.93,
    "JYP": 154.49,
    "CAD": 1.37,
    "AUD": 1.51,
    "PKR": 278.13, //Pakistni Rupee
};
let date = [];
// prompt the user to select currencies to convert from and to
let user_Ans = await inquirer.prompt([
    {
        type: "input",
        name: "date",
        message: chalk.greenBright("Please enter today's date :")
    },
    {
        type: "list",
        name: "from_Currency",
        message: chalk.yellowBright("select the Currency to covert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        type: "list",
        name: "to_currency",
        message: chalk.greenBright("Select the Currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.magentaBright("Enter the amont to convert"),
    }
]);
// perform currency conversion by using formula
let from_amount = exchangs_rates[user_Ans.from_Currency];
let to_amount = exchangs_rates[user_Ans.to_currency];
let amount = user_Ans.amount;
//Formula conversion 
let base_amount = amount / from_amount;
let converter_amount = base_amount * to_amount;
date.push(user_Ans.date);
// disply the converted amount
console.log(chalk.yellowBright("\n****$****$*****$*****$*****$****$*****$****$***$****$****$**\n"));
console.log(chalk.redBright("Converted_History\nDate : ", chalk.yellowBright(date)));
Converted_History.push(`${chalk.yellowBright(user_Ans.from_Currency)}" to  "${chalk.yellowBright(user_Ans.to_currency)}" Your Amount "${chalk.yellowBright(user_Ans.amount)}" converted_amount = "${chalk.yellowBright(converter_amount.toFixed(2))}"`);
console.log(chalk.redBright(Converted_History));
console.log(chalk.yellowBright("\n****$****$*****$*****$*****$****$*****$****$***$****$****$**"));
