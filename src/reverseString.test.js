import reverseString from "./reverseString";

test('"TEST" to become "TSET"', () => {
    expect(reverseString('TEST')).toBe('TSET');
})

test('"1234" to become "4321"', () => {
    expect(reverseString('1234')).toBe('4321');
})

test('"do spaces work" to become "krow secaps od"', () => {
    expect(reverseString('do spaces work')).toBe('krow secaps od');
})

