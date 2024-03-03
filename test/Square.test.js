const Square = require('../lib/Square.cjs');

describe('Square',()=>{
    // Test to verify Square can be instantiated
    describe('Instantiate',()=>{
        it('Verify Square can be instantiated',()=>{
            const square = new Square('orange','NET','white');
            expect(square).toBeInstanceOf(Square);
        })
    })

    // Test to verify logo color can be assigned
    describe('Initialize Square properties',()=>{
        it('Should set logo color, text, and text color properly',()=>{
        const square = new Square('orange','NET','white');
        expect(square.color).toBe('orange');
        expect(square.textColor).toBe('white');
        expect(square.text).toBe('NET')
        })
    })
})