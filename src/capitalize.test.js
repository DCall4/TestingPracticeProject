const { default: capitalize } = require("./capitalize");

test('"test" to become "Test"', () => {
    expect(capitalize('test')).toBe('Test');
})

test('"1234" to become "1234"', () => {
    expect(capitalize('1234')).toBe('1234');
})

test('"TEST" to become "TEST"', () => {
    expect(capitalize('TEST')).toBe('TEST');
})

test('"12test" to become "12Test"', () => {
    expect(capitalize('12test')).toBe('12Test');
})

test('"!@#" to become "!@#"', () => {
    expect(capitalize('!@#')).toBe('!@#');
})

test('"!@#Test" to become "!@#Test"', () => {
    expect(capitalize('!@#Test')).toBe('!@#Test');
})


