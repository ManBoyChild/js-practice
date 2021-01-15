const leapYears = function(yearIn) {
    let result = true;

    if (yearIn % 4 === 0 && yearIn % 100 !== 0 || yearIn % 400 === 0) {
        result = true;
    } else {
        result = false;
    }

    return result;

}

module.exports = leapYears
