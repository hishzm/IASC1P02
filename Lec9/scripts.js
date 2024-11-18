console.log("Hello World");

// Properly define the function
function buttonClick() {
    console.log("Someone pressed the button!");
}

var todayFullDate = new Date();
var todayTime = todayFullDate.getTime();
var todayFullYear = todayFullDate.getFullYear();
var todayMonth = todayFullDate.getMonth() + 1; //To make it up to date

console.log(todayFullDate);
console.log(todayTime);
console.log(todayFullYear);
console.log(todayMonth);

function showTheDate() {
  document.getElementById("theDate").innerHTML = todayFullDate;
}

//console.log(8+10 + "five" + 8 + 10);
//console.log(9+10 + "3" + 3 + 1);

//var a = 3;
//var b = 9;

//console.log()
//console.log(String(a) + b + "3" + 3 + 1);

//var myAlert = alert("THIS IS AN ALERT. YOUR NINJA 300 IS LOOSING OIL!!!");
//console.log(myAlert);

//var myConfirm = confrim("This popup want to see if this date is correct: " + 3);
console.log(myConfirm);
