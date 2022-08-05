const removeFromArray = function (array, ...remove) {
  let concatNum = [];
  let fn = [];
  let int = 0;
  let lengthStore = array.length;

  function checkIndex() {
    let found = [];
    for (i = 0; i < remove.length; i++) {
        console.log("found: " + found);
        if (found[0] < 0) {
            found.shift();
      } 
        int = found.push(array.indexOf(remove[i]));
    }
    return found.sort(); // sort to protect the .shift method?
  }

  for (removal of checkIndex()) {
    array.splice(removal, 1);
    console.log("array: " + array);
    console.log("checkIndex: " + checkIndex());
  }
};
console.log(removeFromArray([1, 2, 3, 4], 3, 4));

//console.log(removeFromArray(["yes", "no", "epic"], "yes"));
// Do not edit below this line
module.exports = removeFromArray;
