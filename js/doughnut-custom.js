//Total Meters

var BAChartDataValue = [
	160, 
	62,
]; 
var BAChartDataLabel = [
	'Commissioned', 
	'Non-Commisioned',   
];

var BAChartJobErrColors = [
	'#55A605',
	'#D83535',
];

var BAChartCountTotal = 0;
if (BAChartDataValue.length > 0) {
	BAChartCountTotal = BAChartDataValue.reduce(function(acc, currentVal, currentIdx, arr){
		return acc + currentVal;
	}, 0);
}

window.addEventListener('load', function(){
	var BAChartCtx = document.getElementById('BA-chart-job-error').getContext('2d');
	var BAChartJobErr = new Chart(BAChartCtx, {
		type: 'doughnut',
		data: {
			labels: BAChartDataLabel,
			datasets: [{
				data: BAChartDataValue,
				backgroundColor: BAChartJobErrColors,
				borderColor: '#fff',
				borderWidth: 6,
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			title: {
				display: true,
				position: 'center',
				fontSize: 28,
				fontColor: '#767676',
        		fontFamily:'Plus Jakarta Sans',
				fontStyle: '600',
				padding: 44,
				margin: 30,
				// text: 'Total Meters',
			},
			legend: {
				display: true,
				position: 'top',
				"labels": {
					"fontSize": 16,
					"fontFamily" : 'Plus Jakarta Sans',
					 "fontWeight": '700',
				}
			},
			plugins: {
				labels: [
					{
						render: 'label',
						fontColor: 'transparent',
            			fontSize: 24,
            			fontStyle: '600',
				    	padding: 44,
            			margin:10,
            			fontFamily:'Plus Jakarta Sans',
						position: 'outside'
					},
					{
						render: 'value',
						fontColor: '#fff',
            			fontSize: 24,
            			fontStyle: '600',
            			fontFamily:'Plus Jakarta Sans',
					}
				],
				doughnutlabel: {
					labels: [
						{
							text: BAChartCountTotal,
							color:'#000',
							font: {
								size: 40,
								weight:600,
								family:'Plus Jakarta Sans',
							}
			  
						}
					]
				}
			}
			
			
		}
	});
});


//Communication Status

var options = {
	series: [{
	name: 'Communicating',
	data: [76, 85, 101, 98, 87, 105, 91]
  }, {
	name: 'Non Communicating',
	data: [44, 55, 57, 56, 61, 58, 63]
  }],
	chart: {
	type: 'bar',
	height: 350
  },
  colors:['#55A605', '#D83535'],
  plotOptions: {
	bar: {
	  horizontal: false,
	  columnWidth: '40%',
	  columnGap:'20',
	  endingShape: 'rounded'
	},
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	show: true,
	width: 2,
	colors: ['transparent']
  },
  xaxis: {
	categories: ['01 Oct', '02 Oct', '03 Oct', '04 Oct', '05 Oct', '06 Oct', '07 Oct'],
  },
  yaxis: {
	title: {
	  text: 'Units'
	}
  },
  fill: {
	opacity: 1
  },
  tooltip: {
	y: {
	  formatter: function (val) {
		return val 
	  }
	}
  }
  };

  var chart = new ApexCharts(document.querySelector("#tab-chart"), options);
  chart.render();

//communication Status > LDN > Number
var options = {
	series: [{
	  name: "Voltage Record",
	  data: [10, 41, 35, 51, 49, 62, 69]
  }],
	chart: {
	height: 350,
	type: 'line',
	zoom: {
	  enabled: false
	}
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	curve: 'straight'
  },
  title: {
	text: 'Voltage Record',
	align: 'left'
  },
  grid: {
	row: {
	  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
	  opacity: 0.5
	},
  },
  xaxis: {
	categories: ['01 Oct', '02 Oct', '03 Oct', '04 Oct', '05 Oct', '06 Oct', '07 Oct'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#com-status-chart"), options);
  chart.render();

  //

  var options = {
	series: [{
	  name: "Voltage Record",
	  data: [10, 41, 35, 51, 49, 62, 69]
  }],
	chart: {
	height: 350,
	type: 'line',
	zoom: {
	  enabled: false
	}
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	curve: 'straight'
  },
  title: {
	text: 'Voltage Record',
	align: 'left'
  },
  grid: {
	row: {
	  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
	  opacity: 0.5
	},
  },
  xaxis: {
	categories: ['01 Oct', '02 Oct', '03 Oct', '04 Oct', '05 Oct', '06 Oct', '07 Oct'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#com-status-chart1"), options);
  chart.render();


//

// var options = {
// 	series: [{
// 	data: [76, 85, 101, 98, 87, 105, 91],
// 	name: 'Total',
// 		legend: {
// 		  text: 'Total',
// 		  format: 'Custom Format: %{val} %{name}'
// 		}
//   }, {
// 	data: [44, 55, 41, 64, 22, 43, 21],
// 	name: 'Closed Valve',
// 		legend: {
// 		  text: 'Closed Valve',
// 		  format: 'Custom Format: %{val} %{name}'
// 		}
//   }],
// 	chart: {
// 	type: 'bar',
// 	height: 430
//   },
//   colors:['#55A605', '#F44336'],
//   plotOptions: {
// 	bar: {
// 	  horizontal: true,
// 	  dataLabels: {
// 		position: 'top',
// 	  },
// 	}
//   },
//   dataLabels: {
// 	enabled: true,
// 	offsetX: -6,
// 	style: {
// 	  fontSize: '12px',
// 	  colors: ['#fff']
// 	}
//   },
//   stroke: {
// 	show: true,
// 	width: 1,
// 	colors: ['#fff']
//   },
//   tooltip: {
// 	shared: true,
// 	intersect: false
//   },
//   xaxis: {
// 	categories: ['01 Oct', '02 Oct', '03 Oct', '04 Oct', '05 Oct', '06 Oct', '07 Oct'],
//   },
  
//   };

//   var chart = new ApexCharts(document.querySelector("#valve-chart"), options);
//   chart.render();


var options = {
	series: [
	{
	  name: 'Total',
	  group: 'budget',
	  data: [76, 85, 101, 98, 87, 105, 91]
	},
	{
	  name: 'Closed Valve',
	  group: 'budget',
	  data: [44, 55, 41, 64, 22, 43, 21]
	}
  ],
	chart: {
	type: 'bar',
	height: 350,
	stacked: true,
  },
  stroke: {
	width: 1,
	colors: ['#fff']
  },
  dataLabels: {
	formatter: (val) => {
	  return val
	}
  },
  plotOptions: {
	bar: {
	  horizontal: false
	}
  },
  xaxis: {
	categories: ['01 Oct', '02 Oct', '03 Oct', '04 Oct', '05 Oct', '06 Oct', '07 Oct']
  },
  fill: {
	opacity: 1
  },
  colors: ['#55A605', '#F44336'],
  yaxis: {
	labels: {
	  formatter: (val) => {
		return val
	  }
	}
  },
  legend: {
	position: 'top',
	horizontalAlign: 'left'
  }
  };

  var chart = new ApexCharts(document.querySelector("#valve-chart"), options);
  chart.render();



  //
  var options = {
	series: [44, 55, 13, 43],
	chart: {
	type: 'donut',
  },
  labels: ['Valve Closed', 'About to Close', 'Notification Issued', 'Positive'],
  colors: ['#f00', '#ff7600','#2563eb', '#18ae00'],
  responsive: [{
	breakpoint: 480,
	options: {
	  chart: {
		// width: 200
	  },
	  legend: {
		position: 'bottom'
	  }
	}
  }]
  };

  var chart = new ApexCharts(document.querySelector("#prepaid-chart"), options);
  chart.render();
