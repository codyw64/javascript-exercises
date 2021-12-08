let input = 5;

function ctof(input) {
  output = (input * 1.8) + 32;
  let final = Math.round(output * 10) / 10;
  return final;
};

function ftoc(input) {
  output = (input - 32) * (5/9);
  let final = Math.round(output * 10) / 10;
  return final;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
