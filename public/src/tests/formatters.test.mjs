// public/src/tests/formatters.test.mjs (Jest Version)

// Use ES Module import - Adjust the path relative to THIS test file
// Assuming this test file is at the root of the project for Jest's default setup,
// or configure Jest's roots if needed. Let's assume Jest runs from project root.
import formatters from '../applications/cross-assets-formatters'; // Adjust path as needed!

// --- Important Note on Importing the AMD module ---
// The 'formatters.js' module is still written using AMD 'define'.
// Jest doesn't understand AMD natively. To make this work WITHOUT converting
// formatters.js to pure ES Modules, you'd typically need a Jest transformer
// or environment that can handle AMD (like configurations involving Babel
// plugins or specific Jest environments).
//
// **Simplest Solution:** Modify formatters.js slightly to work in BOTH AMD and CommonJS/Node (for Jest).

// Let's assume you modify formatters.js as shown in Step 3b below.
// Then the import above should work.


describe('applications/formatters', () => {

    describe('formatRIC', () => {
        it('should wrap RIC in a gray span', () => {
            expect(formatters.formatRIC('.NDX')).toBe('<span style="color: #ccc;">.NDX</span>');
        });

        it('should handle empty string', () => {
            expect(formatters.formatRIC('')).toBe('<span style="color: #ccc;"></span>');
        });
    });

    describe('formatName', () => {
        it('should wrap Name in a blue span', () => {
            expect(formatters.formatName('NASDAQ 100')).toBe('<span style="color: #4ea8ff;">NASDAQ 100</span>');
        });

        it('should handle empty string', () => {
            expect(formatters.formatName('')).toBe('<span style="color: #4ea8ff;"></span>');
        });
    });

    describe('formatLast', () => {
        it('should wrap Last price in an orange span', () => {
            expect(formatters.formatLast(15010.43)).toBe('<span style="color: #ffa500;">15010.43</span>');
        });

        it('should handle zero', () => {
            expect(formatters.formatLast(0)).toBe('<span style="color: #ffa500;">0</span>');
        });

        it('should handle empty string', () => {
            expect(formatters.formatLast('')).toBe('<span style="color: #ffa500;"></span>');
        });
    });

    describe('formatPriceChange', () => {
        it('should format positive changes in green', () => {
            expect(formatters.formatPriceChange('+1.08%')).toBe('<span style="color: #0f0;">+1.08%</span>');
            expect(formatters.formatPriceChange('+5.5')).toBe('<span style="color: #0f0;">+5.5</span>');
            expect(formatters.formatPriceChange('10')).toBe('<span style="color: #0f0;">10</span>');
        });

        it('should format negative changes in red', () => {
            expect(formatters.formatPriceChange('-2.08%')).toBe('<span style="color: #f00;">-2.08%</span>');
            expect(formatters.formatPriceChange('-10')).toBe('<span style="color: #f00;">-10</span>');
        });

        it('should format zero/neutral/invalid changes in gray', () => {
            expect(formatters.formatPriceChange('+0.00')).toBe('<span style="color: #ccc;">+0.00</span>');
            expect(formatters.formatPriceChange('0.00%')).toBe('<span style="color: #ccc;">0.00%</span>');
            expect(formatters.formatPriceChange('0')).toBe('<span style="color: #ccc;">0</span>');
            expect(formatters.formatPriceChange('-0')).toBe('<span style="color: #ccc;">-0</span>');
            expect(formatters.formatPriceChange('Unchanged')).toBe('<span style="color: #ccc;">Unchanged</span>');
            expect(formatters.formatPriceChange('')).toBe('<span style="color: #ccc;"></span>');
            expect(formatters.formatPriceChange(null)).toBe('<span style="color: #ccc;"></span>');
            expect(formatters.formatPriceChange(undefined)).toBe('<span style="color: #ccc;"></span>');
        });
    });
});