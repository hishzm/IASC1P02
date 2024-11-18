var start = new Date();

function stopTime() {
  var stop = new Date();
  var timeDifference = stop.getTime() - start.getTime();
  var seconds = timeDifference / 600;
  var myAlert = alert(`You have been on the page for: ${seconds.toFixed(3)} seconds`);
}
