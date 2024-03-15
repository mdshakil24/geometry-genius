function parallelogramCalculate() {
    const base = getInputValue('parallelogramBase');
    const height = getInputValue('parallelogramHeight');
    const parallelogramAreaCalculate = base * height;

    setTextById('parallelogramArea', parallelogramAreaCalculate);
    setTextById('parallelogramAreaCalculate', parallelogramAreaCalculate);
}
