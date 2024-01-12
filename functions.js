function saveAndDisplay() {

    var numb1 = document.getElementById('numb1').value;
    var numb2 = document.getElementById('numb2').value;
    var selectedOperation = document.getElementById('operation').value;
    var numb1Text = document.getElementById('numb1Text').innerText
    var numb2Text = document.getElementById('numb2Text').innerText

    console.log('User Input 1:', numb1);
    console.log('User Input 2:', numb2);

    switch(selectedOperation) {
        case 'subtract': 
            var answer = +numb1 - +numb2; // -
            document.getElementById('numb1Text').innerText = "Enter first numb:";
            document.getElementById('numb2Text').innerText = "Enter second numb:";
            break;
        case 'add':
            var answer = +numb1 + +numb2; // +
            document.getElementById('numb1Text').innerText = "Enter first numb:";
            document.getElementById('numb2Text').innerText = "Enter second numb:";
            break;
        case 'divide':
            var answer = +numb1 / +numb2; // /
            document.getElementById('numb1Text').innerText = "Enter first numb:";
            document.getElementById('numb2Text').innerText = "Enter second numb:";
            break;
        case 'multiply':
            var answer = +numb1 * +numb2; // *
            document.getElementById('numb1Text').innerText = "Enter first numb:";
            document.getElementById('numb2Text').innerText = "Enter second numb:";
            break;
        case 'caret':
            var answer = Math.pow(+numb1, +numb2); // ^
            document.getElementById('numb1Text').innerText = "Base";
            document.getElementById('numb2Text').innerText = "Exponent";
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
      }

    document.getElementById('answer').innerText = answer;
}
