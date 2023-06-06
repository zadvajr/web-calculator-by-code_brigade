/*This is the code logic, computational and interactivity  for the web-calculator. 
@zadvajr and @Dannyross1 are responsible for this part*/

// display() sets buttons value to display


function display(value) {
    document.getElementById("screen").value += value;;
    console.log(buttonValues.value);
}