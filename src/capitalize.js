
function capitalize(string) {
    for(let i = 0; i < string.length; i++){
        if(isUpperCase(string[i])) {
            return string
        } else if(isLowerCase(string[i])) {
            let capString = 
            string.slice(0, i) + 
            string[i].toUpperCase() + 
            string.slice(i + 1);

            return capString;
        };
    };
    return string;
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

export default capitalize;