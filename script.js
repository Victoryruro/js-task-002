let num1 = +prompt("Enter first number");

let operator = prompt("Enter the desired operator(+_-_*_/)");

let num2= +prompt("Enter the second parameter");

let result ;
if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }
  

let message = num1 + ' ' + operator + ' ' + num2 + ' = ' + result;
alert(message);
