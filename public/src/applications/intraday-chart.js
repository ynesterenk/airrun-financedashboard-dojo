define([
    "dojox/charting/Chart2D",
    "dojox/charting/themes/Claro",
    "./intraday-chart-data"
], function(Chart2D, theme,  transformIntradayData ) {
    function initializeIntradayChart() {
        const intradayValues = [{"date": "2025-03-28T09:30:00-04:00", "price": 111.66500091552734}, {"date": "2025-03-28T09:40:00-04:00", "price": 111.981201171875}, {"date": "2025-03-28T09:50:00-04:00", "price": 111.6500015258789}, {"date": "2025-03-28T10:00:00-04:00", "price": 111.2698974609375}, {"date": "2025-03-28T10:10:00-04:00", "price": 110.30999755859375}, {"date": "2025-03-28T10:20:00-04:00", "price": 109.93499755859375}, {"date": "2025-03-28T10:30:00-04:00", "price": 109.45999908447266}, {"date": "2025-03-28T10:40:00-04:00", "price": 109.9749984741211}, {"date": "2025-03-28T10:50:00-04:00", "price": 109.88500213623047}, {"date": "2025-03-28T11:00:00-04:00", "price": 109.44499969482422}, {"date": "2025-03-28T11:10:00-04:00", "price": 109.97010040283203}, {"date": "2025-03-28T11:20:00-04:00", "price": 109.53500366210938}, {"date": "2025-03-28T11:30:00-04:00", "price": 109.95999908447266}, {"date": "2025-03-28T11:40:00-04:00", "price": 110.07009887695312}, {"date": "2025-03-28T11:50:00-04:00", "price": 109.60070037841797}, {"date": "2025-03-28T12:00:00-04:00", "price": 109.73500061035156}, {"date": "2025-03-28T12:10:00-04:00", "price": 109.71990203857422}, {"date": "2025-03-28T12:20:00-04:00", "price": 109.40499877929688}, {"date": "2025-03-28T12:30:00-04:00", "price": 110.03500366210938}, {"date": "2025-03-28T12:40:00-04:00", "price": 109.77999877929688}, {"date": "2025-03-28T12:50:00-04:00", "price": 109.875}, {"date": "2025-03-28T13:00:00-04:00", "price": 109.54499816894531}, {"date": "2025-03-28T13:10:00-04:00", "price": 109.52110290527344}, {"date": "2025-03-28T13:20:00-04:00", "price": 109.7699966430664}, {"date": "2025-03-28T13:30:00-04:00", "price": 109.61499786376953}, {"date": "2025-03-28T13:40:00-04:00", "price": 109.63999938964844}, {"date": "2025-03-28T13:50:00-04:00", "price": 109.63829803466797}, {"date": "2025-03-28T14:00:00-04:00", "price": 109.79499816894531}, {"date": "2025-03-28T14:10:00-04:00", "price": 110.1449966430664}, {"date": "2025-03-28T14:20:00-04:00", "price": 110.01499938964844}, {"date": "2025-03-28T14:30:00-04:00", "price": 110.12000274658203}, {"date": "2025-03-28T14:40:00-04:00", "price": 110.04000091552734}, {"date": "2025-03-28T14:50:00-04:00", "price": 110.13999938964844}, {"date": "2025-03-28T15:00:00-04:00", "price": 110.41500091552734}, {"date": "2025-03-28T15:10:00-04:00", "price": 110.11499786376953}, {"date": "2025-03-28T15:20:00-04:00", "price": 110.16600036621094}, {"date": "2025-03-28T15:30:00-04:00", "price": 109.62000274658203}, {"date": "2025-03-28T15:40:00-04:00", "price": 109.56500244140625}, {"date": "2025-03-28T15:50:00-04:00", "price": 109.6050033569336}];
        const intradayData = transformIntradayData(intradayValues);
        var intradayChart = new Chart2D("intraDayChart");
        // Update the theme to change chart background colors:
        theme.chart.fill = "rgb(16,24,40)";
        theme.chart.stroke = { color: "rgb(16,24,40)", width: 0 };
        theme.plotarea.fill = "rgb(16,24,40)";
        theme.plotarea.stroke = null;
        intradayChart.setTheme(theme);
        intradayChart.addPlot("default", { type: "Lines", tension: "S" });
        intradayChart.addAxis("x", {
            labels: [{value: 0, text: "9:00"}, {value: 1, text: "9:10"}, {value: 2, text: "9:20"},
                {value: 3, text: "9:30"}, {value: 4, text: "9:40"}, {value: 5, text: "9:50"},
                {value: 6, text: "10:00"}, {value: 7, text: "10:10"}, {value: 8, text: "10:20"},
                {value: 9, text: "10:30"}, {value: 10, text: "10:40"}, {value: 11, text: "10:50"},
                {value: 12, text: "11:00"}, {value: 13, text: "11:10"}, {value: 14, text: "11:20"},
                {value: 15, text: "11:30"}, {value: 16, text: "11:40"}, {value: 17, text: "11:50"},
                {value: 18, text: "12:00"}, {value: 19, text: "12:10"}, {value: 20, text: "12:20"},
                {value: 21, text: "12:30"}, {value: 22, text: "12:40"}, {value: 23, text: "12:50"},
                {value: 24, text: "13:00"}, {value: 25, text: "13:10"}, {value: 26, text: "13:20"},
                {value: 27, text: "13:30"}, {value: 28, text: "13:40"}, {value: 29, text: "13:50"},
                {value: 30, text: "14:00"}, {value: 31, text: "14:10"}, {value: 32, text: "14:20"},
                {value: 33, text: "14:30"}, {value: 34, text: "14:40"}, {value: 35, text: "14:50"},
                {value: 36, text: "15:00"}, {value: 37, text: "15:10"}, {value: 38, text: "15:20"}
            ]
        });
        intradayChart.addSeries("Intraday", intradayData, {
            stroke: { color: "rgb(109,117,233)", width: 2 },
            marker: "circle",
            markers: true,
            fill: "rgb(109,117,233)" // fill for markers
        });
        intradayChart.render();
        intradayChart.resize();

    }

    return initializeIntradayChart;
});
