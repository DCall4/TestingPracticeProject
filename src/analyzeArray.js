function analyzeArray(array) {
    let sum = array.reduce((partialSum, num) => partialSum + num, 0)
    let length = array.length;
    let average = sum / length;

    let min = Math.min(...array);
    let max = Math.max(...array);

    const analyzedArray = {
        average: average,
        min: min,
        max: max,
        length: length
    };

    return analyzedArray;
}

export default analyzeArray