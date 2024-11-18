var myPrompt = prompt("What is your age?");
myPrompt = Number(myPrompt);

window.onload = function() {
  var birthYear = new Date().getFullYear() - myPrompt;
  document.getElementById("birthYear").innerText = "Your birth year is: " + birthYear;
}
