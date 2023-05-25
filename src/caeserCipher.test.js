import caeserCipher from "./caeserCipher"

test('"aabbcc" to become "bbccdd', () => {
    expect(caeserCipher('aabbcc')).toBe('bbccdd');
})

test('"aAbBzZ" to become "bBcCaA', () => {
    expect(caeserCipher('aAbBzZ')).toBe('bBcCaA');
})

test('"aa1 bb# cc" to become "bb1 cc# dd', () => {
    expect(caeserCipher('aa1 bb# cc')).toBe('bb1 cc# dd');
})