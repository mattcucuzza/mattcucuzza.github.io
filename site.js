/* Scrolling Effect */
$(document).ready(function() {
	$(".navbar a, footer a[href='#myPage'], .btn-sm").on('click', function(event) {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900, function() {
			window.location.hash = hash;
		});
	});
})

$(function () {
	// Highcharts.setOptions({
	//  colors: ['#8bcedd']
	// });
	var chart;
    $(document).ready(function () {
        // Build the chart
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
								backgroundColor: null,
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
								borderColor: null
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
												color: '#FAFAFA',
												connectorColor: '#FAFAFA',
												borderWidth: 0,
												style: {
													textShadow: false
												}
												// borderColor: '#FAFAFA',
                    },
                    showInLegend: false
                }
            },
						credits: {
							enabled: false
						},
						exporting: {
							enabled: false
						},
            series: [{
                name: 'Efficiency',
                colorByPoint: true,
                data: [{
                    name: 'HTML',
                    y: 25.00
                }, {
                    name: 'CSS',
                    y: 25.00
                }, {
                    name: 'Python',
                    y: 15.00
                }, {
                    name: 'Java',
                    y: 25.00
                }, {
                    name: 'Javascript',
                    y: 15.00
                }, {
                    name: 'SQL',
                    y: 8.00
                }, {
                    name: 'Scala',
                    y: 5.00
                }, {
                    name: 'R',
                    y: 2.00
                }, ]
            }]
        });
    });
});
