
function rhombusAreaCalculate() {
     const diagonalsOne = getInputValue('diagonalsOne');
     const diagonalsTwo = getInputValue('diagonalsTwo');
     const rhombusCalculate = 0.5 * diagonalsOne * diagonalsTwo;

     setTextById('rhombusArea',rhombusCalculate);
     setTextById('rhombusAreaCalculate',rhombusCalculate);
}
