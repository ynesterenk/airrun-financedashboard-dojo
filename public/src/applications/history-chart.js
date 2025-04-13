define([
    "dojox/charting/Chart2D",
    "dojox/charting/themes/Claro",
    "./history-chart-data"
], function(Chart2D, theme, transformPriceHistory) {
function initializeHistoryChart() {
    // Update theme colors
    theme.chart.fill = "rgb(16,24,40)";
    theme.chart.stroke = { color: "rgb(16,24,40)", width: 0 };
    theme.plotarea.fill = "rgb(16,24,40)";
    theme.plotarea.stroke = null;

    // Sample data - you should probably load or import `priceHistory`
    var priceValues = [144.47, 149.43, 140.14, 140.11, 135.91, 133.23, 131.76, 136.24, 133.57, 137.71];
    // ---> Use the extracted function for transformation <---
    const priceHistory = transformPriceHistory(priceValues);

    // Chart initialization logic using the transformed data
    try {
        if (!document.getElementById("historicalChart")) {
            console.warn("Chart container 'historicalChart' not found. Skipping chart initialization.");
            return; // Exit if container isn't there
        }
        var historyChart = new Chart2D("historicalChart");
        historyChart.setTheme(theme);
        historyChart.addPlot("default", { type: "Lines", markers: true });
        historyChart.addAxis("x", { labels: [] }); // Note: Labels are empty, might need adjustment based on actual data points
        historyChart.addAxis("y", { vertical: true });
        historyChart.addSeries("Prices", priceHistory, {
            stroke: { color: "green", width: 2 },
            marker: "circle",
            markers: true,
            fill: "rgb(109,117,233)"
        });
        historyChart.render();
        historyChart.resize();
    } catch (error) {
        console.error("Error initializing history chart:", error);
    }
}
    return initializeHistoryChart;
});
