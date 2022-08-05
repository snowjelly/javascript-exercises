const removeFromArray = function (ar, ...remove) {
  let removed = [];
  let iter = 0;

  console.log("ar: " + ar);
  console.log("remove: " + remove);
  //'remove' is what needs to be removed.
  //i need a loop to search the array for 'remove'
  //splice(where to remove element, how many)
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === remove[iter]) {
      removed = ar.splice(i, 1);
      console.log("iter: " + iter);
      console.log("remove length " + remove.length);
    }
    console.log("i: " + i + " \n removed: " + removed + "\n iter: " + iter);
    if (iter < remove.length - 1) {
        iter++;
    }
  }
  return ar;
};
  console.log(removeFromArray([1, 2, 3, 4], 2, 3));
  // Do not edit below this line
  module.exports = removeFromArray;