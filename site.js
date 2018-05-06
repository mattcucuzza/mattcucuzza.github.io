/* Scrolling Effect */
// $(document).ready(function () {
//     $(".navbar a, footer a[href='#site'], .btn-sm").on('click', function (event) {
//         event.preventDefault();
//         var hash = this.hash;
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 900, function () {
//             window.location.hash = hash;
//         });
//     });
// })

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
                        name: 'SCSS',
                        y: 1
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
                        name: 'SQL',
                        y: 2
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
                        y: 6
                    },
                    {
                        name: 'Git',
                        y: 4
                    },
                    {
                        name: 'JavaScript',
                        y: 3
                    },
                    {
                        name: 'Agile Development',
                        y: 4
                    },
                    {
                        name: 'ASP.NET Core',
                        y: 0.5
                    },
                    {
                        name: 'Node.JS',
                        y: 0.5
                    },
                    {
                        name: 'C#',
                        y: 0.5
                    },
                    {
                        name: 'TypeScript',
                        y: 0.2
                    },
                    {
                        name: 'Angular',
                        y: 0.2
                    },
                    {
                        name: 'AngularJS',
                        y: 1
                    }
                ]
            }]
        });
    });
});
