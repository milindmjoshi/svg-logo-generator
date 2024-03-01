const inquirer = require('inquirer');

inquirer
    .createPromptModule([
        {
            type: list,
            name: shape,
            message: 'Please select a logo shape',
            choices: ['Circle','Square','Triangle'],
            default: 0
        },
        {
            type: input,
            name: color,
            message: 'Please enter logo color',
        },
        {
            type: input,
            name: text,
            message: 'Please enter logo text',
        },
        {
            type: input,
            name: text,
            message: 'Please enter logo text color',
        },





    ])
    .then((answers)=>{
        console.log(answers);
    })
    .catch((error)=>{
        console.log(error);
    })