const yesSubmit = function() {
firebase.database().ref("questions/question1/yes").once("value").then(result => {
	if(result.val()){
	   var yescount = {
		   count: result.val().count + 1};
	   firebase.database().ref("questions/question1/yes").set(yescount);
		}
	
	}).catch(err => {
		console.log(err);
	});
};

const noSubmit = function() {
firebase.database().ref("questions/question1/no").once("value").then(result => {
	if(result.val()){
	   var nocount = {
		   count: result.val().count + 1};
	   firebase.database().ref("questions/question1/no").set(nocount);
		}
	
	}).catch(err => {
		console.log(err);
	});
}

var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.addEventListener("click", yesSubmit);
no.addEventListener("click", noSubmit);
