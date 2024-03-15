// Function for get input value 
function getInputValue(getInputId) {
    const getInput = document.getElementById(getInputId);
    const getInputValue = getInput.value;
    const finalValue = parseFloat(getInputValue);
    return finalValue;
}

// Function for show output 
function setTextById(elementId,area) {
    const getTheId = document.getElementById(elementId);
    getTheId.innerText = area;
}

// Pentagon Area Calculate 

function PentagonAreaCalculate() {
    const perimeter = getInputValue('perimeter');
    const apothem = getInputValue('apothem');
    const pentagonCalculate = 0.5 * perimeter * apothem;
    setTextById('pentagonOutput', pentagonCalculate);
    setTextById('pentagonAreaCalculate', pentagonCalculate);
}

function EllipseAreaCalculate() {
    const semiMajor = getInputValue('semiMajor');
    const semiMinor = getInputValue('semiMinor');
    const ellipseCalculate = 3.1416 * semiMajor * semiMinor;
    setTextById('ellipseOutput',ellipseCalculate);
    setTextById('ellipseCalculate',ellipseCalculate);
}