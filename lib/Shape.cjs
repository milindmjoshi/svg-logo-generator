
class Shape {
    constructor(color,text,textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
        console.log("text is: " + text);
    }

    render(){
        throw new Error("Shape cannot render");
    }
}

module.exports = Shape;

