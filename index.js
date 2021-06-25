function sum(fromN, toN) {
  if (toN === fromN) {
    return fromN;
  }

  return toN + sum(fromN, toN - 1);
}

//console.log(sum(5, 12));
module.exports = sum;
