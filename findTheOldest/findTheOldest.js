let findTheOldest = function(array) {
    return array.reduce((oldest, curr) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(curr.yearOfBirth, curr.yearOfDeath)
        return oldestAge < currentAge ? curr : oldest
    })
}

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
   

module.exports = findTheOldest
