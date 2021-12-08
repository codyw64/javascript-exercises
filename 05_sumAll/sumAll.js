function sumAll(one, two) {
    let total = 0;
    if (one < 0 || two < 0) {
        return "ERROR";
    }
    if (one !== parseInt(one,10) || two !== parseInt(two,10)) {
        return "ERROR";
    }
    for (let i = Math.min(one, two); i <= Math.max(one, two); i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
