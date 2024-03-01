const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a logo shape',
            choices: ['Circle','Square','Triangle'],
            default: 0
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter logo color',
        },
        {
            type: 'input',
            name: 'logoText',
            message: 'Please enter logo text',
        },
        {
            type: 'input',
            name: 'logoTextColor',
            message: 'Please enter logo text color',
        }
    ])
    .then((answers)=>{
        console.log(answers);
        console.log("Gnerated logo.svg");
    })
    .catch((error)=>{
        console.log(error);
    })