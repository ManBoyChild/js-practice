const caesar = function(string, shift) {
    let finalArray = [];
    let mod = shift % 26;


    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if (code > 64 && code < 90) {
            let shifted = code + mod;
        }
        if (code >= 32 && code <= 64) {
            finalArray.push(String.fromCharCode(code));
        } else if (code >= 91 && code <= 96) {
            finalArray.push(String.fromCharCode(code));
        } else if (code >= 123 && code <= 126) {
            finalArray.push(String.fromCharCode(code));
        } else {
            let shifted = code + mod;
            if(shifted > 90 && shifted < 97) {
                let remainder = shifted - 90;
                shifted = 64 + remainder;
            } else if (shifted > 122) {
                 let remainder = shifted - 122;
                shifted = 96 + remainder;
            } else if (shifted < 65) {
                let remainder =  65 - shifted;
                shifted = 91 - remainder;
            }

            finalArray.push(String.fromCharCode(shifted));
        }
    }

    return finalArray.join("");

}

module.exports = caesar
