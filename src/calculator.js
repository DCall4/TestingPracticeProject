const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const divide = (x,y) => {
    return x / y;
}

const multiply = (x, y) => {
    let cf = 10;
    return ((x * cf) * (y * cf)) / (cf * cf);
}

const calculator = {
    add,
    subtract,
    multiply,
    divide
}

export default calculator