

function addInput() {
    var inputNumber = parseInt(document.getElementById('inputNumber').value);
    var total = parseInt(document.getElementById('total').value);
    var result = document.getElementById('total').value = total+inputNumber;
}

function subtractInput() {
    var inputNumber = parseInt(document.getElementById('inputNumber').value);
    var total = parseInt(document.getElementById('total').value);
    var result = document.getElementById('total').value = total-inputNumber;
}
