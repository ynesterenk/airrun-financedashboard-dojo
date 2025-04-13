// public/src/applications/formatters.js (Modified for AMD/Node Compatibility)

// Check if this is an AMD environment
if (typeof define === 'function' && define.amd) {
    // AMD environment (Dojo)
    define([], function() {
        return createFormatters();
    });
} else if (typeof module === 'object' && module.exports) {
    // CommonJS/Node environment (Jest)
    module.exports = createFormatters();
} else {
    // Browser global (fallback, less likely needed)
    // window.myAppFormatters = createFormatters();
}


// Define the actual formatter creation logic in a separate function
function createFormatters() {
    var formatters = {};

    formatters.formatRIC = function(value) {
        return `<span style="color: #ccc;">${value}</span>`;
    };

    formatters.formatName = function(value) {
        return `<span style="color: #4ea8ff;">${value}</span>`;
    };

    formatters.formatLast = function(value) {
        return `<span style="color: #ffa500;">${value}</span>`;
    };

    formatters.formatPriceChange = function(value) {
        // Ensure value is treated as a string for replace
        var valueStr = String(value || '');
        var numericPart = valueStr.replace(/[^\d.-]/g, '');
        var num = parseFloat(numericPart);

        if (isNaN(num) || num === 0) {
            return `<span style="color: #ccc;">${valueStr}</span>`;
        } else if (num > 0) {
            return `<span style="color: #0f0;">${valueStr}</span>`;
        } else {
            return `<span style="color: #f00;">${valueStr}</span>`;
        }
    };

    // Return the object containing the formatter functions
    return formatters;
}