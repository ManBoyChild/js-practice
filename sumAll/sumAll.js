const sumAll = function(first, second) {
    let sum = 0; 
    let i = 0;
    let lower = Math.min(first, second);
    let upper = Math.max(first, second);

    if (lower < 0 || upper < 0) {
        sum = "ERROR";
    } else if (isNaN(lower) || isNaN(upper)) {
        sum = "ERROR";
    } else if (typeof(first) === 'string' || typeof(second) === 'string') {
        sum = "ERROR";
    } else {
        for (i = lower; i <= upper; i++) {
        sum += i;
        }
    }

    return sum;
}

module.exports = sumAll
