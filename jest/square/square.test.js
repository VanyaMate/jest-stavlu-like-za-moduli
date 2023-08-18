const { square } = require('./square');

describe('square', () => {
    let mockValue;
    beforeEach(() => {
        mockValue = Math.random();
    })

    test('Mock', () => {
        expect(square(mockValue)).toBe(mockValue ** 2);
    })

    test('Called', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('True', () => {
        expect(square(2)).toBe(4);
        expect(square(-10)).toBe(100);
        expect(square(1)).toBe(1);
        expect(square(0)).toBe(0);
        expect(square(null)).toBe(0);
        expect(square(undefined)).toBe(0);
        expect(square()).toBe(0);
        expect(square({})).toBe(0);
        expect(square([])).toBe(0);
        expect(square('2')).toBe(0);
    })

    afterEach(() => {
        jest.clearAllMocks();
    })
})