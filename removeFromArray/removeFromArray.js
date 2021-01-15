const removeFromArray = function(arrayIn, remove1, remove2, remove3, remove4) {
    let arrayCopy = [];
    let filterArray = [];

    if (remove2 === undefined && remove3 === undefined && remove4 === undefined) {
        filterArray.push(remove1);
        arrayCopy = arrayIn.filter((item) => !filterArray.includes(item));

    } else if (remove3 === undefined && remove4 === undefined) {
        filterArray.push(remove1, remove2);
        arrayCopy = arrayIn.filter((item) => !filterArray.includes(item));
    } else if (remove4 === undefined) {
        filterArray.push(remove1, remove2, remove3);
        arrayCopy = arrayIn.filter((item) => !filterArray.includes(item));
    } else if (arguments.length === 5) {
        filterArray.push(remove1, remove2, remove3, remove4);
        arrayCopy = arrayIn.filter((item) => !filterArray.includes(item));
    } else {
        arrayCopy = [...arrayIn];
    }
     return arrayCopy;
}

module.exports = removeFromArray
