// public/src/applications/history-chart-data.js

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
        // Browser globals (less likely needed)
        // root.historyChartDataTransformer = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    // This function transforms a simple array of price values into the {x, y} format
    // expected by the dojox/charting addSeries method for the history chart.
    function transformPriceHistory(priceValues) {
        if (!Array.isArray(priceValues)) {
            // Handle invalid input gracefully
            return [];
        }
        return priceValues.map((price, index) => ({
            x: index, // Use array index for x-axis value
            // Ensure 'y' is a number, default to 0 if not
            y: typeof price === 'number' ? price : 0
        }));
    }

    // The module exports the transformation function
    return transformPriceHistory;
}));