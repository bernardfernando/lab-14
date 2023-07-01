'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
let chartAppState = new AppState();
    chartAppState.loadItems();

function renderChart() {
    const allDuckProducts =  chartAppState.allProducts;
    const productNames = [];
    const productViews = [];
    const productClicks = [];
  
    for (let i = 0; i < allDuckProducts.length; i++) {
      productNames.push(allDuckProducts[i].productName);
      productViews.push(allDuckProducts[i].views);
      productClicks.push(allDuckProducts[i].clicks);
    }
    console.log(productNames);
    console.log(productViews);
    console.log(productClicks);
  
    // use function now
  
    const data = {
      labels: productNames,
      datasets: [
        {
          label: "clicks",
          data: productClicks,
          backgroundColor: ["#f7f7f7"],
          borderColor: ["#074e67"],
          borderWidth: 1,
        },
  
        {
          label: productViews,
          data: productViews, // changed from productViews
          backgroundColor: ["#D36B00"],
          borderColor: ["#42032C"],
          borderWidth: 1,
        },
      ],
    };
  
    const config = {
      type: "bar",
      data: data,
    };
  
    const productSurveyChart = document.getElementById("myChart");
    const productChart = new Chart(productSurveyChart, config);
  
    ////lical storage function invoking goes here
    /* setLocalStorage(); */
  }
}

renderChart();
