const Shape = require('../lib/Shape.cjs');

describe('Shape',()=>{
    // Test to verify Shape can be instantiated
    describe('Instantiate',()=>{
        it('Verify Shape can be instantiated',()=>{
            const shape = new Shape('blue','STN','white');
            expect(shape).toBeInstanceOf(Shape);
        })
    })

    // Test to verify shape cannot be rendered
    describe('Shape is parent class, cannot be rendered',()=>{
        it('Should throw error if you try to render shape',()=>{
        const shape = new Shape('blue','STN','white');
        expect(shape.render).toThrow();
        })
    })
})