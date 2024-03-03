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

    // Test to verify square renders correctly
    describe('Render SVG square',()=>{
        it('Should render svg element for square with selected colors',()=>{
            const square = new Square('orange','NET','white');
            expect(square.render()).toBe(
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="300" height="300" fill="orange"/><text x="155" y="130" font-size="60" text-anchor="middle" fill="white">NET</text></svg>')
        })
    })
})