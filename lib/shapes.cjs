
class Shape {
    constructor(color,text,textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
        console.log("text is: " + text);
        // if (this.text.length() > 3){
        //     throw new Error("Logo text must not be greater than 3 characters");
        // }
    }

    render(){
        throw new Error("Shape cannot render");
    }
}

module.exports = Shape;

