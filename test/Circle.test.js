const Circle = require('../lib/Circle.cjs');

describe('Circle',()=>{
    describe('Instantiate',()=>{
        it('Verify Circle can be instantiated',()=>{
            const circle = new Circle('blue','STN','white');
            expect(circle).toBeInstanceOf(Circle);
        })
    })

    // Test to verify logo color can be assigned
    describe('Initialize Circle properties',()=>{
        it('Should set logo color, text, and text color properly',()=>{
        const circle = new Circle('blue','STN','white');
        expect(circle.color).toBe('blue');
        expect(circle.textColor).toBe('white');
        expect(circle.text).toBe('STN')
        })
    })
})