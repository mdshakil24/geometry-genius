document.getElementById('calculateRectangle').addEventListener('click',getRectangleArea);

function getRectangleArea() {

    const rectangleWidth =  document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);

    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLength.value;
    const length = parseFloat(rectangleLengthValue);

    const area = width * length;

    const rectangleArea1 = document.getElementById('rectangleArea');
    rectangleArea1.innerText = area;
    const rectangleArea2 = document.getElementById('rectangleAreaCalculate');
    rectangleArea2.innerText = area;




}