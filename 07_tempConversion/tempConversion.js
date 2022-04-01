function ftoc(farenheit) {
  let cel = (farenheit - 32) * (5 / 9);
  cel = Math.round(cel * 10) / 10;
  return cel;
}

const ctof = function (celcius) {
  let far = celcius * (9 / 5) + 32;
  far = Math.round(far * 10) / 10;
  return far;
  //return Math.round((celcius * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
