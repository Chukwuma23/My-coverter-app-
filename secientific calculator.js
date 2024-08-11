const secalculator = document.getElementById('seCalculator')

function openSeCalculator() {
    secalculator.style.right = '0';
    if (screenWidth > 768) {
        seCalculator.style.display = 'block';
    }
    // Tab to edit
}

function appendToDisplay(value){
    document.getElementById('displa'). display.value += value;
/*(value, isFunction){ if(isFunction){ document.calcul.result.value += value; }else{ document.calcul.result.value += eval(value); } }
}*/
}

function sin(){
try {
var valu = parseFloat(document.calcul.result.value);
document.calcul.result.value = "sin(" + valu + " = " + Math.sin(valu);
} catch (error) {
document.calcul.result.value = "Error: Invalid input";
}
}



function sin(){
  try {
    document.calcul.result.value = Math.sin(parseFloat(document.calcul.result.value));
  } catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}

function cos(){
  try {
      var valu = parseFloat(document.calcul.result.value);
document.calcul.result.value = "cos(" + valu + " = " + Math.cos(valu);
} catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}

function tan(){
  try {
    var valu = parseFloat(document.calcul.result.value);
document.calcul.result.value = "tan(" + valu + " = " + Math.tan(valu);
  } catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}

function BACKSPC(){
  try {
    var a = document.calcul.result.value;
    document.calcul.result.value = a.substr(0, a.length-1);
  } catch (error) {
    document.calcul.result.value = "Error: Cannot perform operation";
  }
}

function square(){
try {
var valu = parseFloat(document.calcul.result.value);
document.calcul.result.value = valu + "² = "    + Math.pow(valu, 2);
} catch (error) {
document.calcul.result.value = "Error: Invalid input";
}
}




function cubed(){
  try {
      
      var valu = parseFloat(document.calcul.result.value);
document.calcul.result.value = valu + "³ = " + Math.pow(valu, 3);
  } catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}

function sqrt2(){
  try {
      var valu = parseFloat(document.calcul.result.value);
document.calcul.result.value = "√" + valu +    " = " + Math.pow(valu, 0.5);
  } catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}

function sqrt3(){
  try {
      var valu = parseFloat(document.calcul.result.value);
document.calcul.result.value = "³√" + valu + " = " + Math.pow(valu, 1/3);
  } catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}

function number(event) {
  let value = event.target.getAttribute('value');
  if (value !== null) {
    document.getElementById('displa').value += value;
  } else {
    console.error('Value is null');
  }
}




/*function number(value){
  try {
    document.calcul.result.value += value;
  } catch (error) {
    document.calcul.result.value = "Error: Cannot perform operation";
  }
}*/

function remv(){
  try {
    document.calcul.result.value = "";
  } catch (error) {
    document.calcul.result.value = "Error: Cannot perform operation";
  }
}

function equal(){
  try {
    document.calcul.result.value = eval(document.calcul.result.value);
  } catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}



/*function log(base) {
  try {
    var valu = parseFloat(document.calcul.result.value);
    if (base === undefined) {
      base = Math.E; // default to natural logarithm
    }
    document.calcul.result.value = "log" + (base !== Math.E ? "_" + base : "") + "(" + valu + ") = " + Math.log(valu) / Math.log(base);
  } catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}*/



function power10() {
  try {
    var valu = parseFloat(document.calcul.result.value);
    document.calcul.result.value = "10^" + valu + " = " + Math.pow(10, valu);
  } catch (error) {
    document.calcul.result.value = "Error: Invalid input";
  }
}










/*function singleClickHandler(e) {
  if (doubleClickCount === 0) {
    doubleClickTimer = setTimeout(function() {
      document.getElementById('display').value += "5"; // Display "0" immediately
      console.log('5')
      doubleClickCount = 0;
    }, 500); // Adjust the delay time as needed
    doubleClickCount++;
  }
  if (e.detail === 2) {
    e.preventDefault();
    clearTimeout(doubleClickTimer);
    doubleClickCount = 0;
  }
}

function doubleClickHandler() {
  let displayValue = document.getElementById('display').value;
  let num = parseFloat(displayValue);
  
  let logResult = Math.log(num);
  document.getElementById('display').value = `log(${num}) = ${logResult}`; // Display log calculation
  console.log('num')
}*/

let doubleClickTimer;
let doubleClickCount = 0;



/*function singleClickHandler(e) {
  if (doubleClickCount === 0) {
    doubleClickTimer = setTimeout(function() {
      document.getElementById('display').value += "5";
      console.log('5')
      doubleClickCount = 0;
    }, 500);
    doubleClickCount++;
  }
  if (e.detail === 2) {
    e.preventDefault();
    clearTimeout(doubleClickTimer);
    doubleClickCount = 0;
    doubleClickHandler(); // Call doubleClickHandler on double click
  }
}

function doubleClickHandler() {
  let displayValue = document.getElementById('display').value;
  let num = parseFloat(displayValue);
  let logResult = Math.log(num);
  document.getElementById('display').value = `log(${num}) = ${logResult}`;
  console.log('num')
}*/





function number5(event) {
  if (doubleClickCount === 0) {
    doubleClickTimer = setTimeout(function() {
      document.getElementById('displa').value += "5";
      doubleClickCount = 0;
    }, 200);
    doubleClickCount++;
  }
}

function doubleClickLogs(event) {
  clearTimeout(doubleClickTimer);
  doubleClickCount = 0;
  let displayValue = document.getElementById('displa').value;
  let num = parseFloat(displayValue);
  let logResult = Math.log(num);
  document.getElementById('displa').value = `log(${num}) = ${logResult}`;
}


function numberOne(event) {
  if (doubleClickCount === 0) {
    doubleClickTimer = setTimeout(function() {
      document.getElementById('displa').value += "1";
      doubleClickCount = 0;
    }, 200);
    doubleClickCount++;
  }
}

function doubleClickTan(event) {
  clearTimeout(doubleClickTimer);
  doubleClickCount = 0;
  let displayValue = document.getElementById('displa').value;
  let num = parseFloat(displayValue);
  let tanResult = Math.tan(num);
  document.getElementById('displa').value = `tan(${num}) = ${tanResult}`;
}

function number2(event) {
  if (doubleClickCount === 0) {
    doubleClickTimer = setTimeout(function() {
      document.getElementById('displa').value += "2";
      doubleClickCount = 0;
    }, 200);
    doubleClickCount++;
  }
}

function doubleClickCos(event) {
  clearTimeout(doubleClickTimer);
  doubleClickCount = 0;
  let displayValue = document.getElementById('displa').value;
  let num = parseFloat(displayValue);
  let cosResult = Math.cos(num);
  document.getElementById('displa').value = `cos(${num}) = ${cosResult}`;
}


/*function doubleClickHandler(value, operation) {
  let displayValue = document.getElementById('displa').value;
  let num = parseFloat(displayValue);
  
  switch (operation) {
    case 'log':
      let logResult = Math.log(num);
      document.getElementById('displa').value = `log(${num}) = ${logResult}`;
      break;
    case 'tan':
      let tanResult = Math.tan(num);
      document.getElementById('displa').value = `tan(${num}) = ${tanResult}`;
      break;
    case 'cos':
      let cosResult = Math.cos(num);
      document.getElementById('displa').value = `cos(${num}) = ${cosResult}`;
      break;
    default:
      console.error(`Unknown operation: ${operation}`);
  }
}*/