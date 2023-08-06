import * as inquirer from 'inquirer';
const prompt = inquirer.createPromptModule();
prompt(
    [
        {
            name: "first_name",
            message: "What is your name?"
        }
    ]
).then(answers => {
    console.log(`You answered: ${answers.first_name}`);
});
