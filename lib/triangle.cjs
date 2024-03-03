const Shape = require('./Shape.cjs');
class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color,text,textColor);
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="130 20, 270 250, 0 250" fill="${this.color}"/>
        <text x="130" y="130" font-size="38" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
         </svg>
        `
    }


 
}

module.exports = Triangle;