function convert() {
    let unitType = document.getElementByld("unitType").value;
    let inputValue = parseFloat(document.getElementByld("inputValue").value);
    let result = document.getElementByld("result");


if (isNaN(inputValue)) {
    result.textContent ="0"
    return;
}

if (unitType === "meter-kilometer") {
    result.textContent = (inputValue / 1000).toFixed(4) + " km";
}else if (unitType === "inch-centimeter") {
    result.textContent = (inputValue * 2.54).toFixed(2) +" cm";
}
}

function updatePlaceholder() {
    let unitType = document.getElementByld("unitType").value;
    let inputField = document.getElementByld("inputValue");

    if (unitType === "meter-kilometer") {
        inputField.placeholder = "Enter meters"
    }else{
        inputField.placeholder = "Enter inches";
    }
}