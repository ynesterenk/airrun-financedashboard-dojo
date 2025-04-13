
// Compatibility wrapper for AMD and Node/CommonJS
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.js (and Jest running in Node).
        module.exports = factory();
    } else {
        // Browser globals (usually not needed/used)
        // root.intradayChartDataTransformer = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    // This function transforms raw intraday values into the format
    // expected by the dojox/charting addSeries method for this specific chart.
    function transformIntradayData(intradayValues) {
        if (!Array.isArray(intradayValues)) {
            // Handle invalid input gracefully
            return [];
        }
        return intradayValues.map((point, index) => {
            // Basic validation for expected properties
            const price = (point && typeof point.price === 'number') ? point.price : 0; // Default to 0 if missing/invalid
            const date = (point && typeof point.date === 'string') ? point.date : 'Unknown Date'; // Default if missing/invalid

            return {
                x: index, // Use array index for x-axis value
                y: price,
                tooltip: `${date}: ${price.toFixed(2)}` // Format tooltip
            };
        });
    }

    // The module exports the transformation function directly
    // (or an object containing it, if you prefer)
    return transformIntradayData;
}));