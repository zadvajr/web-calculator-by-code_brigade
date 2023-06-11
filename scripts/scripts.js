/*This is the code logic, computational and interactivity  for the web-calculator. 
@zadvajr and @Dannyross1 are responsible for this part*/

// display() sets buttons value to display
function display(value) {
    document.getElementById("screen").value += value;;
    console.log(buttonValues.value);
}

// clearScreen() this is a clear screen function
function clearScreen() {
    document.getElementById('screen').value = "";
}

//percent() this is a percentage funtion
function percent() {
   let amount = document.getElementById('screen').value;
   //still working on this section
}

//compute() function
function compute() {
    let expression = document.getElementById('screen').value;
    let result = eval(expression);
    document.getElementById('screen').value = result;

}