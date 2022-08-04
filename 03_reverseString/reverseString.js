// this function holds a for(i) loop which increments backwards. it goes through each letter and updates 'piece' with another character as the loop increments backwards through the 'string' input
const reverseString = function (string) {
  let piece = "";
      // 'i > -1;' and 'i = string.length - 1;' are necessary because 0 is an index in strings. 'i = string.length;' prints out nothing.
      // 'i = > 0' causes the loop to ignore the last letter in the string. which is the first char to concat.
  for (i = string.length - 1; i > -1; i--) {
    piece = piece.concat(string.charAt(i)); 
  }
  return piece;
};

// Do not edit below this line
module.exports = reverseString;
