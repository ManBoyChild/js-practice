const reverseString = function(rString) {
let reverse = rString;
let holder = [];

for (let i = rString.length - 1; i >= 0; i--) {
    holder.push(reverse.charAt(i));
}

return holder.join('');

}

module.exports = reverseString
