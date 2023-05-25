const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const cipher = 'bcdefghijklmnopqrstuvwxyzaBCDEFGHIJKLMNOPQRSTUVWXYZA';

function caeserCipher(string) {
    if (typeof string !== 'string') {
        return 'Input is not string'
    }

    let cipherString = '';

    for (let i = 0; i < string.length; i++) {
        if (isUpperCase(string[i]) || isLowerCase(string[i])){
            cipherString += caesarChar(string[i]);
        } else {
            cipherString += string[i];
        }
    }
    return cipherString;
}

function caesarChar(char) {
    let i = alphabet.indexOf(char);
    let cipherChar = cipher[i];
    return cipherChar;

}

function isUpperCase(character) {
    if (character == character.toUpperCase() && character != character.toLowerCase()) {
        return true;
    } else {
        return false;
    };
};

function isLowerCase(character) {
    if (character == character.toLowerCase() && character != character.toUpperCase()) {
        return true;
    } else {
        return false;
    };
}

export default caeserCipher