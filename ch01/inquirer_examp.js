"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var prompt = inquirer.createPromptModule();
prompt([
    {
        name: "first_name",
        message: "What is your name?"
    }
]).then(function (answers) {
    console.log("You answered: ".concat(answers.first_name));
});
