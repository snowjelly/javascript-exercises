const ftoc = function(f) {
const c = (f - 32) * 5/9;
  return round10(c, -1);
};

const ctof = function(c) {
  const f = c * 9/5 + 32;
  return round10(f, -1);
};
/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
 function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
const round10 = (value, exp) => decimalAdjust('round', value, exp);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
