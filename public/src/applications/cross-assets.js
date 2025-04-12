define([
    "dojox/grid/DataGrid",
    "dojo/data/ItemFileReadStore"
], function(DataGrid, ItemFileReadStore) {

    function formatRIC(value) {
        return `<span style="color: #ccc;">${value}</span>`;
    }

    function formatName(value) {
        return `<span style="color: #4ea8ff;">${value}</span>`;
    }

    function formatLast(value) {
        return `<span style="color: #ffa500;">${value}</span>`;
    }

    function formatPriceChange(value) {
        var numericPart = value.replace(/[^\d.-]/g, '');
        var num = parseFloat(numericPart);

        if (isNaN(num) || num === 0) {
            return `<span style="color: #ccc;">${value}</span>`;
        } else if (num > 0) {
            return `<span style="color: #0f0;">${value}</span>`;
        } else {
            return `<span style="color: #f00;">${value}</span>`;
        }
    }

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
                    formatter: formatRIC
                },
                {
                    name: "Name",
                    field: "name",
                    width: "180px",
                    formatter: formatName
                },
                {
                    name: "Last",
                    field: "last",
                    width: "100px",
                    formatter: formatLast
                },
                {
                    name: "Price Change",
                    field: "change",
                    width: "400px",
                    formatter: formatPriceChange
                }
            ],
            autoHeight: false
        }, "grid");

        grid.startup();
    }

    return initializeCrossAssets;
});