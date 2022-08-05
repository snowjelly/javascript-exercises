const removeFromArray = function (array, ...remove) {
  let concatNum = [];
  let fn = [];
  for (const arrayValue of remove) {
    if (typeof arrayValue === "string") {
      const filteredString = array.filter(
        (removeString) => removeString != arrayValue
      );
    } else if (typeof arrayValue === "number") {
      const filteredNumber = array.filter(
        (removeNumber) => removeNumber != arrayValue
      );
      //console.log(filteredNumber);
      //console.log(concatNum = concatNum.concat(arrayValue));
      console.log(filteredNumber);
      // if the value in the array is a number. create a new array
    }
  }
  
};
console.log(removeFromArray([1, 2, 3, 4], 2, 3, 4));
//console.log(removeFromArray(["yes", "no", "epic"], "yes"));
// Do not edit below this line
module.exports = removeFromArray;
