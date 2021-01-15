const repeatString = function(stringInput, repeatInt) {
    outputString = "";
    i = repeatInt;

    do {
        if (i < 0) {
            outputString += "ERROR";
        } else if (i === 0) {
            outputString += "";
        } else {
            outputString += stringInput;
        }
        i--;
    } while (i > 0);
    return outputString;
}

module.exports = repeatString
