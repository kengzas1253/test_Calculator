const calculator = require('./calculator')

describe('add function', () => {
    test('should return 3 if a = 1 and b = 2', () => {
        const a = 1;
        const b = 2;
        const expected = 3;
        const result = calculator.add(a, b);
        expect(result).toBe(expected)
    })

})