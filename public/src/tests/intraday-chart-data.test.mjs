// public/src/tests/intraday-chart-data.test.mjs

// Import the function to test (adjust path as needed)
import transformIntradayData from '../applications/intraday-chart-data';

describe('applications/intraday-chart-data', () => {

    // Sample input similar to the original data
    const sampleInput = [
        {"date": "2025-03-28T09:30:00-04:00", "price": 111.66500091552734},
        {"date": "2025-03-28T09:40:00-04:00", "price": 111.981201171875},
        {"date": "2025-03-28T09:50:00-04:00", "price": 111.6500015258789}
    ];

    it('should transform valid intraday data correctly', () => {
        const expectedOutput = [
            { x: 0, y: 111.66500091552734, tooltip: "2025-03-28T09:30:00-04:00: 111.67" },
            { x: 1, y: 111.981201171875,   tooltip: "2025-03-28T09:40:00-04:00: 111.98" },
            { x: 2, y: 111.6500015258789,  tooltip: "2025-03-28T09:50:00-04:00: 111.65" }
        ];
        const actualOutput = transformIntradayData(sampleInput);

        expect(actualOutput).toHaveLength(expectedOutput.length);
        // Using toEqual for deep comparison of objects in the array
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should return an empty array for empty input array', () => {
        expect(transformIntradayData([])).toEqual([]);
    });

    it('should return an empty array for non-array input', () => {
        expect(transformIntradayData(null)).toEqual([]);
        expect(transformIntradayData(undefined)).toEqual([]);
        expect(transformIntradayData({})).toEqual([]);
        expect(transformIntradayData("not an array")).toEqual([]);
    });

    it('should handle missing or invalid price/date properties gracefully', () => {
        const invalidInput = [
            {"date": "2025-03-28T10:00:00-04:00"}, // Missing price
            {"price": 110.50},                    // Missing date
            {}                                    // Missing both
        ];
        const expectedOutput = [
            { x: 0, y: 0, tooltip: "2025-03-28T10:00:00-04:00: 0.00" }, // Default price
            { x: 1, y: 110.50, tooltip: "Unknown Date: 110.50" },      // Default date
            { x: 2, y: 0, tooltip: "Unknown Date: 0.00" }              // Both defaults
        ];
        const actualOutput = transformIntradayData(invalidInput);
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should correctly format tooltip prices to 2 decimal places', () => {
        const input = [{"date": "2025-01-01T12:00:00Z", "price": 123.45678}];
        const output = transformIntradayData(input);
        expect(output[0].tooltip).toBe("2025-01-01T12:00:00Z: 123.46"); // Check rounding
    });

});