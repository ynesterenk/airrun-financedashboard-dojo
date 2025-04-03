require([
    "dojo/parser", "dojox/grid/DataGrid", "dojo/data/ItemFileReadStore",
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/layout/TabContainer",
    "dojox/charting/Chart2D", "dojox/charting/themes/Claro", "dojo/domReady!",
    "plugins/news",
    "plugins/cross-assets",
    "plugins/intraday-chart",
    "plugins/history-chart"
], function(parser,
            DataGrid,
            ItemFileReadStore,
            BorderContainer,
            ContentPane,
            TabContainer,
            Chart2D,
            theme,
            ready,
            initializeNews,        // <--- Check this
            initializeCrossAssets, // <--- Check this
            initializeIntradayChart, // <--- Check this
            initializeHistoryChart // <--- Check this
) {

    console.log("--- finance-dashboard.js: Require callback executing ---");
    // **** ADD/MODIFY LOGS ****
    console.log("typeof parser:", typeof parser); // Expect function or object
    console.log("typeof DataGrid:", typeof DataGrid); // Expect function
    console.log("typeof initializeNews:", typeof initializeNews); // CURRENTLY OBJECT - PROBLEM
    console.log("typeof initializeCrossAssets:", typeof initializeCrossAssets); // WHAT IS THIS?
    console.log("typeof initializeIntradayChart:", typeof initializeIntradayChart); // WHAT IS THIS?
    console.log("typeof initializeHistoryChart:", typeof initializeHistoryChart); // WHAT IS THIS?
    // *************************

    parser.parse();

    // Call the functions (use the check)
    if (typeof initializeNews === 'function') {
        initializeNews();
    } else {
        console.error("Cannot call initializeNews - it's a " + typeof initializeNews);
    }

    if (typeof initializeCrossAssets === 'function') {
        initializeCrossAssets();
    } else {
        console.error("Cannot call initializeCrossAssets - it's a " + typeof initializeCrossAssets);
    }

    if (typeof initializeIntradayChart === 'function') {
        initializeIntradayChart();
    } else {
        console.error("Cannot call initializeIntradayChart - it's a " + typeof initializeIntradayChart);
    }

    if (typeof initializeHistoryChart === 'function') {
        initializeHistoryChart();
    } else {
        console.error("Cannot call initializeHistoryChart - it's a " + typeof initializeHistoryChart);
    }

    console.log("--- finance-dashboard.js: Plugin initialization complete (or attempted) ---");
});