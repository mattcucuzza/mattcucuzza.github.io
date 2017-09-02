/* Scrolling Effect */
$(document).ready(function () {
    $(".navbar a, footer a[href='#myPage'], .btn-sm").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
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
                pointFormat: '{series.name}: <b>{point.y:1f} years</b>',
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
                name: 'Experience',
                colorByPoint: true,
                data: [
                    {
                        name: 'HTML',
                        y: 2
                    }, 
                    {
                        name: 'CSS',
                        y: 2
                    }, 
                    {
                        name: 'Python',
                        y: 1
                    }, 
                    {
                        name: 'Java',
                        y: 4
                    }, 
                    {
                        name: 'MySQL',
                        y: 1
                    },
                    {
                        name: 'AngularJS',
                        y: 0.2
                    }, 
                    {
                        name: 'MongoDB',
                        y: 1
                    }, 
                    {
                        name: 'Photoshop',
                        y: 5
                    },
                    {
                        name: 'Git',
                        y: 3
                    },
                    {
                        name: 'Javascript',
                        y: 2
                    },
                    {
                        name: 'Scrum',
                        y: 3
                    },
                    {
                        name: 'Node.js',
                        y: 0.5
                    }
                ]
            }]
        });
    });
});
