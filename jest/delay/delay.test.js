const { delay } = require("./delay");
describe('delay', () => {
    test('True', async () => {
        const sum = await delay(() => 10, 1000);
        expect(sum).toBe(10);
    })
})