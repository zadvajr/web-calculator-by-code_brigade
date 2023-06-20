/*This is the code logic, computational and interactivity  for the web-calculator. 
@zadvajr and @Dannyross1 are responsible for this part*/

let input = document.getElementById('screen');
let keys = document.querySelectorAll('button');
let screenValue = "";

for(item of keys) {
    item.addEventListener('click', (e) => {
       buttonText = e.target.innerHTML;

        if(buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            input.value = screenValue;
        }
        else if(buttonText == 'C') {
            screenValue = '';
            input.value = screenValue;
        }
        else if(buttonText == '=') {
            input.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            input.value = screenValue;
        }

    })
}