// public/src/applications/cross-assets.js (Updated)
define([
    "dojox/grid/DataGrid",
    "dojo/data/ItemFileReadStore",
    "./cross-assets-formatters" // <-- Require the new formatters module (relative path)
], function(
    DataGrid,
    ItemFileReadStore,
    formatters // <-- Get the formatters object
) {

    // Formatter functions are now defined in './formatters.js'

    function initializeCrossAssets() {
        var gridData = {
            identifier: 'ric',
            label: 'ric',
            items: [
                { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00" },
                { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
                { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%" },
                { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%" },
                { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%" },
                { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%" }
            ]
        };

        var store = new ItemFileReadStore({ data: gridData });
        var grid = new DataGrid({
            store: store,
            structure: [
                {
                    name: "RIC",
                    field: "ric",
                    width: "80px",
                    // Use the imported formatter function
                    formatter: formatters.formatRIC
                },
                {
                    name: "Name",
                    field: "name",
                    width: "180px",
                    // Use the imported formatter function
                    formatter: formatters.formatName
                },
                {
                    name: "Last",
                    field: "last",
                    width: "100px",
                    // Use the imported formatter function
                    formatter: formatters.formatLast
                },
                {
                    name: "Price Change",
                    field: "change",
                    width: "400px",
                    // Use the imported formatter function
                    formatter: formatters.formatPriceChange
                }
            ],
            autoHeight: false // Assuming this should be false based on original code
        }, "grid"); // Assuming the target node ID is "grid"

        // Ensure grid startup is called IF the target node ("grid") exists
        // Note: In a real app, you'd likely pass the node or ID into this function
        if (document.getElementById("grid")) {
            grid.startup();
        } else {
            // Optionally handle the case where the grid node doesn't exist yet
            // console.warn("Grid node 'grid' not found for startup in initializeCrossAssets.");
        }
    }

    // Return the initialization function
    return initializeCrossAssets;
});