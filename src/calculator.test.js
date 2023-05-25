import calculator from "./calculator";

test('add(2,3) is 5', () => {
    expect(calculator.add(2,3)).toBe(5);
})

test('add(-3,1) is -2', () => {
    expect(calculator.add(-3,1)).toBe(-2);
})

test('add(0.2,0.3) is 0.5', () => {
    expect(calculator.add(0.2,0.3)).toBe(0.5);
})

test('subtract(3,1) is 2', () => {
    expect(calculator.subtract(3,1)).toBe(2);
})

test('subtract(-3,1) is -4', () => {
    expect(calculator.subtract(-3,1)).toBe(-4);
})

test('subtract(0.5,0.1) is 0.4', () => {
    expect(calculator.subtract(0.5,0.1)).toBe(0.4);
})

test('multiply(-3,1) is -3', () => {
    expect(calculator.multiply(-3,1)).toBe(-3);
})

test('multiply(3,3) is 9', () => {
    expect(calculator.multiply(3,3)).toBe(9);
})

test('multiply(-3,-1) is 3', () => {
    expect(calculator.multiply(-3,-1)).toBe(3);
})

test('multiply(-3,1) is -3', () => {
    expect(calculator.multiply(-3,1)).toBe(-3);
})

test('multiply(3,0.1) is 0.3', () => {
    expect(calculator.multiply(3,0.1)).toBe(0.3);
})

test('divide(-3,1) is -3', () => {
    expect(calculator.divide(-3,1)).toBe(-3);
})

test('divide(-3,3) is -1', () => {
    expect(calculator.divide(-3,3)).toBe(-1);
})

test('divide(-9,-3) is 3', () => {
    expect(calculator.divide(-9,-3)).toBe(3);
})

test('divide(3,0.3) is 10', () => {
    expect(calculator.divide(3,0.3)).toBe(10);
})