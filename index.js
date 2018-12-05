var yescount, nocount;

firebase.database().ref("questions/question1").once("value").then(result => {
	if(result.val()){
		yescount = result.val().yes;
		nocount = result.val().no;
		}
	}).catch(err => {
		console.log(err);
});


// Load google charts
google.charts.load('current', {'packages':['corechart']});

const showResults = function() {
	buttons = document.getElementById("buttons");
	buttons.innerHTML = "<div id='piechart'>";

  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Yes', yescount],
  ['No', nocount],
  ])
  var options = {'title':'Results', 'width':550, 'height':400};
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

//TODO: firebase increment serially
const yesSubmit = function() {
	yescount++;
	firebase.database().ref("questions/question1").set({yes: yescount, no: nocount});
	showResults();
};

const noSubmit = function() {
	nocount++;
	firebase.database().ref("questions/question1").set({yes: yescount, no: nocount});
	showResults();
}

var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.addEventListener("click", yesSubmit);
no.addEventListener("click", noSubmit);
