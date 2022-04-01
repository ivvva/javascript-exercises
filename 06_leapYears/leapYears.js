const leapYears = function (yearNumber) {
  if (yearNumber % 400 == 0) {
    return true;
  }
  if (yearNumber % 100 == 0) {
    return false;
  }
  if (yearNumber % 4 == 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
