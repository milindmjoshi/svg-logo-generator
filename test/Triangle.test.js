const Triangle = require('../lib/Triangle.cjs');

describe('Triangle',()=>{
    // Test to verify Triangle can be instantiated
    describe('Instantiate',()=>{
        it('Verify Triangle can be instantiated',()=>{
            const triangle = new Triangle('orange','MMJ','white');
            expect(triangle).toBeInstanceOf(Triangle);
        })
    })

    // Test to verify logo color can be assigned
    describe('Initialize Triangle properties',()=>{
        it('Should set logo color, text, and text color properly',()=>{
        const triangle = new Triangle('orange','MMJ','white');
        expect(triangle.color).toBe('orange');
        expect(triangle.textColor).toBe('white');
        expect(triangle.text).toBe('MMJ')
        })
    })

     // Test to verify Triangle renders correctly
     describe('Render SVG triange', () => {
        it('Should render svg element for triangle with selected colors', () => {
            const triangle = new Triangle('orange', 'NET', 'white');
            expect(triangle.render()).toBe(
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="130 20, 270 250, 0 250" fill="orange"/><text x="130" y="140" font-size="38" text-anchor="middle" fill="white">NET</text></svg>`)
        })
    })
})