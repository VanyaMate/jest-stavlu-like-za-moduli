const { validateValue } = require('./validate-value');


describe('validationValue', () => {
    test('True', () => {
        expect(validateValue(0)).toBe(true);
        expect(validateValue(55)).toBe(true);
        expect(validateValue(100)).toBe(true);
    })
    test('False', () => {
        expect(validateValue(101)).toBe(false);
        expect(validateValue(-1)).toBe(false);
        expect(validateValue(null)).toBe(false);
        expect(validateValue(undefined)).toBe(false);
        expect(validateValue(-Infinity)).toBe(false);
        expect(validateValue(Infinity)).toBe(false);
        expect(validateValue()).toBe(false);
        expect(validateValue({})).toBe(false);
    })
});
