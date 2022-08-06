const removeFromArray = function (arrayKeep, ...arrayRemove) {
  const args = Array.from(arrayRemove);
  let newArray = [];



  //removeIndex() creates an array called 'newArray'
  //'newArray' takes the indexOf every individual element inside 'args'
const removeIndex = () => {
  for (i = 0; i < args.length; i++) {
    if (arrayKeep.includes(args[i])) {
      newArray.push(arrayKeep.indexOf(args[i]));
    }
  }
  return newArray;
}

  //logs variables before result gets returned
  const logPreResult = () => {
  //args is 'arrayRemove' converted to Array object
  //removeIndex is an array displaying the index of items found in arrayKeep that need to be removed 
  console.table(["remove values: " + args, "values found in indicies: " + removeIndex()]);
  }
  logPreResult();


  //loop and filter out whatever we return. el is essentially result[i] and index is "i"
  const result = arrayKeep.filter((el, index) => { 
    //loop through the arguments that need to be removed to find what we need to return to filter out
    for (value of args) { 
      // value = args[i]
      console.log("value: "+ value);
      

      // el is result[index] 
      // console.log("el: " + el);
      

      // index is 'i'
      // console.log("index: " + index);

      
      //return
      if (el != value) {
        return el != value;
      }
    }

    
    
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
