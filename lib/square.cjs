const Shape = require('./Shape.cjs');
class Square extends Shape{
    constructor(color, text, textColor){
        super(color,text,textColor);
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="300" height="300" fill="${this.color}"/>
        <text x="130" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
         </svg>
        `
    }


 
}

module.exports = Square;