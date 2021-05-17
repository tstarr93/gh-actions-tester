import { sumTwoNum } from './main.js';

describe('sumTwoNum tests', () => {
    it('should add two numbers together', () => {
        const result = sumTwoNum(5, 10);

        expect(result).toBe(15);
    })
})