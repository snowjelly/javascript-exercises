const removeFromArray = function (arrayKeep, ...arrayRemove) {
  const args = Array.from(arrayRemove);
  let newArray = [];


  //for (count of args) {
  //console.log("count: " + count);
  //}
  console.log("args: " + args);

const removeIndex = () => {
  for (i = 0; i < args.length; i++) {
    if (arrayKeep.includes(args[i])) {
      newArray.push(arrayKeep.indexOf(args[i]));
    }
  }
  return newArray;
}
console.log("remove index: " + removeIndex());


  const result = arrayKeep.filter((el, index) => { //loop and filter out whatever we return. el is essentially result[i] and index is "i"
    for (value of args) { //loop through the arguments that need to be removed to find what we need to return to filter and create the new array
       console.log("value: "+ value);
      // console.log("el: " + el);
      // console.log("index: " + index);

      
        
      if (el != value) {
        return el != value;
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
console.log(removeFromArray([1, 2, 3, 4], 3));

//console.log(removeFromArray(["yes", "no", "epic"], "yes"));
// Do not edit below this line
module.exports = removeFromArray;
