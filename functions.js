function saveAndDisplay() {

    var numb1 = document.getElementById('numb1').value;
    var numb2 = document.getElementById('numb2').value;

    console.log('User Input 1:', numb1);
    console.log('User Input 2:', numb2);

    document.getElementById('answer').innerText = numb1 + numb2;
}
