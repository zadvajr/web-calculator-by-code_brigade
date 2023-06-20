/*This is the code logic, computational and interactivity  for the web-calculator. 
@zadvajr and @Dannyross1 are responsible for this part*/

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

