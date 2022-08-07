const ftoc = function(f) {
const c = (f - 32) * 5/9;
  return Math.floor(c);
};

const ctof = function(c) {
  const f = c * 9/5 + 32;
  return Math.floor(f);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
