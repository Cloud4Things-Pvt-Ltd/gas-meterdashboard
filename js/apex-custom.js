
//balance

var options = {
    series: [225087, 856392, 620380],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Total Balance', 'Positive Balance', 'Negative Balance'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();
  
  
  
  //Meter Consumption

  var options = {
    series: [95, 1009],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['GRID Zero Consumption', 'DG Zero Consumption'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();