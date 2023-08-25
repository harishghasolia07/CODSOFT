let displayValue = "";

function AddElement(value) {
    displayValue += value;
    document.getElementById("display").textContent = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").textContent = "0";
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("display").textContent = displayValue;
    } catch (error) {
        document.getElementById("display").textContent = "Error";
    }
}
