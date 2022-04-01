const sumAll = function (x, y) {
  if (typeof x != "number" || typeof y != "number") {
    return "ERROR";
  }
  if (x < 0 || y < 0) {
    return "ERROR";
  }
  let start;
  let end;
  if (x < y) {
    start = x;
    end = y;
  } else {
    start = y;
    end = x;
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
