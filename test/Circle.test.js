const Circle = require('../lib/Circle.cjs');

describe('Circle', () => {
    // Test to verify Circle can be instantiated
    describe('Instantiate', () => {
        it('Verify Circle can be instantiated', () => {
            const circle = new Circle('blue', 'STN', 'white');
            expect(circle).toBeInstanceOf(Circle);
        })
    })

    // Test to verify logo color can be assigned
    describe('Initialize Circle properties', () => {
        it('Should set logo color, text, and text color properly', () => {
            const circle = new Circle('blue', 'STN', 'white');
            expect(circle.color).toBe('blue');
            expect(circle.textColor).toBe('white');
            expect(circle.text).toBe('STN')
        })
    })

    // Test to verify Circle renders correctly
    describe('Render SVG circle', () => {
        it('Should render svg element for circle with selected colors', () => {
            const circle = new Circle('orange', 'NET', 'white');
            expect(circle.render()).toBe(
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="orange"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">NET</text></svg>`)
        })
    })
})