import analyzeArray from "./analyzeArray"

test('array of positive integers', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});

test('array of positive integers', () => {
    expect(analyzeArray([1, 2, 3, 4, -5])).toEqual({
        average: 1,
        min: -5,
        max: 4,
        length: 5
    });
});