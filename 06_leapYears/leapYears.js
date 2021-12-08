function leapYears(input) {
    if (Number.isInteger(input / 400)) {
        return true;
    }   else  if (Number.isInteger(input / 100) && Number.isInteger(input / 4)) {
        return false;
    } else if (Number.isInteger(input / 4)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
