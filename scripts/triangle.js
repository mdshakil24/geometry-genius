/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula and then display the area.
 * step  - 1: get base value of the triangle 
 * step-2: added the id in the base input field
 * step-3: use getElementById to access the input field.
 * step-4: get value from the input field. (Value is string now)
 * step-5: convert the value to a number. Using parseFloat
 * 
 */

function triangleArea() {
    // get the base value
    const triangleBase = document.getElementById('triangleBase');
    const triangleBaseValue = triangleBase.value;
    const baseNumber = parseFloat(triangleBaseValue)

    // get the height
    const triangleHeight = document.getElementById('triangleHeight');
    const triangleHeightValue = triangleHeight.value;
    const heightNumber = parseFloat(triangleHeightValue);

    // use formula for calculate triangle area
    const triangleAreaCalculate = 0.5 * baseNumber * heightNumber;

    // show the output in display
    const outputShow1 = document.getElementById('triangleCalc'); 
    const outputShow2 = document.getElementById('triangleAreaCalculate');

    outputShow1.innerText = triangleAreaCalculate;
    outputShow2.innerText = triangleAreaCalculate;





} 