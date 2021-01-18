const caesar = function(string, shift) {
    return string.split("").map(char => shiftChar(char, shift)).join("");

}
    
const codeSet = code =>(code < 97 ? 65 : 97);

const mod = (n, m) =>(n % m + m) % m;

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
}


    // for (let i = 0; i < string.length; i++) {
    //     let code = string.charCodeAt(i);
    //     if (code > 64 && code < 90) {
    //         let shifted = code + mod;
    //     }
    //     if (code >= 32 && code <= 64) {
    //         finalArray.push(String.fromCharCode(code));
    //     } else if (code >= 91 && code <= 96) {
    //         finalArray.push(String.fromCharCode(code));
    //     } else if (code >= 123 && code <= 126) {
    //         finalArray.push(String.fromCharCode(code));
    //     } else {
    //         let shifted = code + mod;
    //         if(shifted > 90 && shifted < 97) {
    //             let remainder = shifted - 90;
    //             shifted = 64 + remainder;
    //         } else if (shifted > 122) {
    //              let remainder = shifted - 122;
    //             shifted = 96 + remainder;
    //         } else if (shifted < 65) {
    //             let remainder =  65 - shifted;
    //             shifted = 91 - remainder;
    //         }

    //         finalArray.push(String.fromCharCode(shifted));
    //     }
    // }

    // return finalArray.join("");


module.exports = caesar
