const inquirer = require('inquirer');
const fs = require('fs');
//const Circle = require('./lib/shapes.cjs');
const Circle = require('./lib/Circle.cjs');
const Square = require('./lib/Square.cjs');
const Shape = require ('./lib/Shape.cjs');
const Triangle = require ('./lib/Triangle.cjs');

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
            message: 'Please enter logo color or hexidecimal code',
        },
        {
            type: 'input',
            name: 'logoText',
            message: 'Please enter logo text',
            validate: (input)=> {
                if (input.length <= 3){
                    return true;
                }
                else {
                    return "Logo text maximum length is 3 characters"
                }
            }
        },
        {
            type: 'input',
            name: 'logoTextColor',
            message: 'Please enter logo text color or hexadecimal code',
        }
    ])
    .then((answers)=>{
        console.log(answers);
        var shape;
        switch (answers.shape){
            case 'Circle':
                 shape = new Circle(answers.color,answers.logoText,answers.logoTextColor); 
                 break;
            case 'Square':
                shape = new Square(answers.color,answers.logoText,answers.logoTextColor);
                break;
            case 'Triangle':
                shape = new Triangle(answers.color,answers.logoText,answers.logoTextColor);
                break;
            default:
                shape = new Shape(answers.color,answers.logoText,answers.logoTextColor);
        }
        // var circle = new Circle(answers.color,answers.logoText,answers.logoTextColor);
        // var square = new Square(answers.color,answers.logoText,answers.logoTextColor);
        //console.log(circle);
        // fs.writeFile("logo.svg", circle.render(),(err) =>
        //    err ? console.error(err) : console.log('Generated logo.svg'));
        // fs.writeFile("logo.svg", square.render(),(err) =>
        //    err ? console.error(err) : console.log('Generated logo.svg'));
        fs.writeFile("logo.svg", shape.render(),(err) =>
            err ? console.error(err) : console.log('Generated logo.svg'));
    })
    .catch((error)=>{
        console.log(error);
    })
