const palindromes = function (word) {
    let reduced = word.replace(/[.!, ]/g, "").toLowerCase().split("");
    let rev = word.replace(/[.!, ]/g, "").toLowerCase().split("").reverse();
    console.log(reduced);
    console.log(rev);
    for (let i = 0; i < reduced.length; i++) {
        if (reduced[i] !== rev[i]) {
            console.log(reduced[i]);
            return false;
        } else {return true}
    }
};
// Do not edit below this line
module.exports = palindromes;
