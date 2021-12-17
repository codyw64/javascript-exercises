const fibonacci = function(number) {
    banana = parseInt(number);
    if (banana < 0) { return "OOPS"}
    if (banana == 1 || banana == 2) {return 1;}
    let a = 1;
    let b = 1;
    let c;
    for (let i = 1; i < banana - 1; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
