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

/* Chart Generator Effect */
window.onload = function () {
	var chart = new CanvasJS.Chart("languageChart", {
		backgroundColor: null,
		theme: "theme1",//theme1
		animationEnabled: true,   // change to true
		animationDuration: 3000,
		interactivityEnabled: false,
		axisX:{
			labelFontColor: "#323232"
		},
		axisY:{
			title: "Proficiency Level",
			titleFontColor: "#323232",
			labelFontColor:"#323232"
		},
		data: [{
		// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
			color: "#92468e",
			dataPoints: [
				{label: "Java",  y: 82},
				{label: "Scala",  y: 55},
				{label: "HTML",  y: 79},
				{label: "CSS", y: 75},
				{label: "Javascript", y: 65},
				{label: "UML",  y: 75},
				{label: "R",  y: 40}
			]
		}]
	});
	chart.render();
} //end chart 

$(document).ready(function() {
	var data = [
    	{
        	value: 300,
        	color:"#F7464A",
        	highlight: "#FF5A5E",
        	label: "Red"
    	},
    	{
        	value: 50,
        	color: "#46BFBD",
        	highlight: "#5AD3D1",
        	label: "Green"
    	},
    	{
        	value: 100,
        	color: "#FDB45C",
        	highlight: "#FFC870",
        	label: "Yellow"
    	}
	];
	var ctx = document.getElementById("myChart").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
}) // end 