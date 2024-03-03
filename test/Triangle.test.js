const Triangle = require('../lib/Triangle.cjs');

describe('Triangle',()=>{
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
})