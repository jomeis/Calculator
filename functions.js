var numb1 = document.getElementById('numb1').value;
var numb2 = document.getElementById('numb2').value;
const numb2Input = document.getElementById('numb2');
const numb1Input = document.getElementById('numb1');

function saveAndDisplay() {
    var selectedOperation = document.getElementById('operation').value; 

    switch(selectedOperation) {
        case 'subtract': 
            var answer = +numb1 - +numb2; // -
            document.getElementById('numb1Text').innerText = "Minuend:";
            document.getElementById('numb2Text').innerText = "Subtrahend:";
            break;
        case 'add':
            var answer = +numb1 + +numb2; // +
            document.getElementById('numb1Text').innerText = "First Addend:";
            document.getElementById('numb2Text').innerText = "Second Addend";
            break;
        case 'divide':
            var answer = +numb1 / +numb2; // /
            document.getElementById('numb1Text').innerText = "Dividend:";
            document.getElementById('numb2Text').innerText = "Divisor:";
            break;
        case 'multiply':
            var answer = +numb1 * +numb2; // *
            document.getElementById('numb1Text').innerText = "Multiplicand:";
            document.getElementById('numb2Text').innerText = "Multiplier:";
            break;
        case 'caret':
            var answer = Math.pow(+numb1, +numb2); // ^
            document.getElementById('numb1Text').innerText = "Base:";
            document.getElementById('numb2Text').innerText = "Exponent:";
            break;
        case 'root':
            var answer =  Math.pow(+numb2, 1/+numb1); // root
            document.getElementById('numb1Text').innerText = "Index:";
            document.getElementById('numb2Text').innerText = "Radicand:";
            break;
        case 'log':
            var answer = Math.log(+numb2) / Math.log(+numb1); // log
            document.getElementById('numb1Text').innerText = "Base:";
            document.getElementById('numb2Text').innerText = "Argument:";
            break;  
        default:
            answer = "what are you doing??";
      }

    document.getElementById('answer').innerText = answer;
}

function specialChar() {
    var selectedChar1 = document.getElementById('numb1Options').value; 
    var selectedChar2 = document.getElementById('numb2Options').value; 

    switch(selectedChar1) {
        case 'pi':
            numb1Input.value = Math.PI;
    }

    switch(selectedChar2) {
        case 'pi':
            numb2Input.value = Math.PI;
    }

}
