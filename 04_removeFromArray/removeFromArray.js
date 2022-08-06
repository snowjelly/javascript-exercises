const removeFromArray = function (arrayKeep, ...arrayRemove) {
  const args = Array.from(arrayRemove);
  let newArray = [];

  //for (count of args) {
  //console.log("count: " + count);
  //}
  console.log("args: " + args);

  const fruits = ["apple", "banana", "grapes", "mango", "orange"];

  /**
   * Filter array items based on search criteria (query)
   */

  const result = arrayKeep.filter((el, index) => {
    for (value of args) {
      if (args[index]) {
        return el != args[index];
      }
    }

    // console.log(args[index]);
    
  });
  return result;

  // const timeToFilter = (value) => { //this piece of shit is not looping. it just returns on the first value it gets.
  //   //how the fuck do i filter an array without just returning the first value
  //   for (i = 0; i < args.length; i++) {
  //     if (arrayKeep.includes(args[i]) == false) {
  //       return false;
  //     } else {
  //       return value != args[i];
  //     }
  //   }
  // }
  //const result = arrayKeep.filter((element, index, array) => element); //since .filter loops through arrayKeep maybe i can ask it to check if it includes the values
  //i need AND returns the correct values before creating the new array
};
console.log(removeFromArray([1, 2, 3, 4], 2, 3));

//console.log(removeFromArray(["yes", "no", "epic"], "yes"));
// Do not edit below this line
module.exports = removeFromArray;
