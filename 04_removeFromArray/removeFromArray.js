const removeFromArray = function (array, ...remove) {
  let concatNum = [];
  let fn = [];
  let found = [];
  let int = 0;

  for (i = 0; i < remove.length; i++) {
    int = found.push(array.indexOf(remove[i]));
  }
  
  

};
console.log(removeFromArray([1, 2, 3, 4], 3, 4));

//console.log(removeFromArray(["yes", "no", "epic"], "yes"));
// Do not edit below this line
module.exports = removeFromArray;
