var row = 1;



var input = document.getElementById('txt');
var button = document.querySelector('.expense');
var date = document.getElementById('dte');
var amount = document.getElementById('amnt');

button.addEventListener('click', function (e) {
    e.preventDefault()
    if (input.value === '') {
        alert('please fill all the boxes');
    return;
    } 

        var table = document.getElementById('table');

        var newRow = table.insertRow(row);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        

        row++;


   
})



