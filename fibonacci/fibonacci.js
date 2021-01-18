const fibonacci = function(sequenceVal) {
    const fibValue = parseInt(sequenceVal);
    let fibArray = [0, 1];

    if (fibValue < 0) {
        return "OOPS"
    } else if (fibValue === 0) {
        return 0;
    } else if (fibValue === 1) {
        return 1;
    } else {
        for (i = 2; i <= fibValue; i++) {
            let next = fibArray[i - 1] + fibArray[i - 2];
            fibArray.push(next);
            
        }
        return fibArray[fibValue];
    }
}

module.exports = fibonacci
