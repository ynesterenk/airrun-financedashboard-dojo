// public/src/tests/history-chart-data.test.mjs

// Import the function to test (adjust path as needed)
import transformPriceHistory from '../applications/history-chart-data';

describe('applications/history-chart-data', () => {

    it('should transform a valid price array into {x, y} objects', () => {
        const input = [144.47, 149.43, 140.14];
        const expectedOutput = [
            { x: 0, y: 144.47 },
            { x: 1, y: 149.43 },
            { x: 2, y: 140.14 }
        ];
        const actualOutput = transformPriceHistory(input);
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should return an empty array for an empty input array', () => {
        expect(transformPriceHistory([])).toEqual([]);
    });

    it('should return an empty array for non-array input', () => {
        expect(transformPriceHistory(null)).toEqual([]);
        expect(transformPriceHistory(undefined)).toEqual([]);
        expect(transformPriceHistory({})).toEqual([]);
        expect(transformPriceHistory("not an array")).toEqual([]);
    });

    it('should handle non-numeric values within the input array by defaulting y to 0', () => {
        const input = [100, 'bad data', 102, null, undefined, 105];
        const expectedOutput = [
            { x: 0, y: 100 },
            { x: 1, y: 0 },    // 'bad data' -> 0
            { x: 2, y: 102 },
            { x: 3, y: 0 },    // null -> 0
            { x: 4, y: 0 },    // undefined -> 0
            { x: 5, y: 105 }
        ];
        const actualOutput = transformPriceHistory(input);
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should handle an array with only non-numeric values', () => {
        const input = ['a', 'b', null];
        const expectedOutput = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 }
        ];
        const actualOutput = transformPriceHistory(input);
        expect(actualOutput).toEqual(expectedOutput);
    });

});