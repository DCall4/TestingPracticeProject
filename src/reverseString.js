
function reverseString(string) {
    let revString = '';
    for(let i = 1; i <= string.length; i++) {
        revString = revString + string.at(-i);
    }
    return revString
}

export default reverseString;