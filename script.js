$(document).ready(function() {
    var result = 0;
    var operand1 = 0;
    var operation = null;
    var currentEntry = '0';
    var operand2 = 0;
    updateScreen(result);
    
    $('.button').on('click', function(evt) {
    var buttonPressed = $(this).html();
    console.log(buttonPressed);
    
    if (buttonPressed === "C") {
      result = 0;
      currentEntry = '0';
      operand1 = 0;
      operand2=0;
    } 
    else if (buttonPressed === "back") {
      currentEntry = currentEntry.substring(0, currentEntry.length-1);
    } 
    else if (buttonPressed === '.') {
      currentEntry += '.';
    } 
    else if (isNumber(buttonPressed)) {
      if (currentEntry === '0') currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } 
    else if (isOperator(buttonPressed)) {
      operand1 = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = '';
    } 
    else if(buttonPressed === '%') {
      currentEntry = currentEntry / 100;
    } 
    else if (buttonPressed === '=') {
      operand2 = parseFloat(currentEntry)
      currentEntry = operate(operand1, currentEntry, operation);
      operation = null;
    }
    
    updateScreen(currentEntry);
    updateScreen1(operand1);
    updateScreen2(operand2);

    });
    });

    
    updateScreen1 = function(displayValue) {
    var displayValue = displayValue.toString();
    $('.screen1').html(displayValue.substring(0, 10));
    };

    updateScreen2 = function(displayValue) {
      var displayValue = displayValue.toString();
      $('.screen2').html(displayValue.substring(0, 10));
    };

    updateScreen = function(displayValue) {
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0, 10));
    };
    
    isNumber = function(value) {
    return !isNaN(value);
    }
    
    isOperator = function(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
    };
    
    operate = function(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
    }
  