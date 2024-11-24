function calculate(operation) {

  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  var result = operation === '/' && num2 === 0 ? "Cannot divide by zero" : eval(`${num1} ${operation} ${num2}`);

  document.getElementById("result").innerText = result;
}
