const numb2Input = document.getElementById('numb2');
const numb1Input = document.getElementById('numb1');
var specialChar1 = document.getElementById('numb1Options');
var specialChar2 = document.getElementById('numb2Options');

function saveAndDisplay() {
    var selectedOperation = document.getElementById('operation').value; 
    var numb1 = document.getElementById('numb1').value;
    var numb2 = document.getElementById('numb2').value;
    var selectedChar1 = document.getElementById('numb1Options').value; 
    var selectedChar2 = document.getElementById('numb2Options').value; 

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

    prevAnswer = document.getElementById("answer").innerHTML

    switch(selectedChar1) {
        case 'pi':
            numb1Input.value = Math.PI;
        case 'prevAnswer':
            numb1Input.value = prevAnswer;
            
    }

    switch(selectedChar2) {
        case 'pi':
            numb2Input.value = Math.PI;
        case 'prevAnswer':
            numb2Input.value = prevAnswer;
    }
}

function inputChanged(changed) {
    if(changed == 1){
        specialChar1.value = "";
    } else if (changed == 2){
        specialChar2.value = "";
    }
}
