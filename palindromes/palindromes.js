const palindromes = function(string) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const strippedString = string.toLowerCase().replace(regex, '');
    let arrayOfString =  [...strippedString];

    let forwardIndex = 0;
    let backwardIndex = arrayOfString.length - 1;

    while(forwardIndex < backwardIndex) { 
        if(arrayOfString[forwardIndex] === " ") {
            forwardIndex += 1;
        }
        if(arrayOfString[backwardIndex] === " ") {
            backwardIndex -= 1;
        }
        if (arrayOfString[forwardIndex] === arrayOfString[backwardIndex]) {
            forwardIndex += 1;
            backwardIndex -= 1;
        } else {
            return false;
        }
        return true;
    }

}

module.exports = palindromes
