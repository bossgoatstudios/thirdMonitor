s = setInterval(displayDate, 1000);
j = setInterval(puppy, 660000);


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var s;
var j;
var random = Math.floor(Math.random() * (54 - 23) + 23);

document.getElementById("timeDisplay").innerHTML = time;
document.getElementById("dateDisplay").innerHTML = date;

function displayDate() {
	var today = new Date();
	
	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	document.getElementById("timeDisplay").innerHTML = time;
    document.getElementById("dateDisplay").innerHTML = date;
	
}

function puppy() {
	random = Math.floor(Math.random() * (54 - 23) + 23);
	document.getElementById("puppyimg").src = random + ".jpg";
} 
//------------------------------------------------------------------------------------------\\ 
