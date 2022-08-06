const removeFromArray = function (arrayKeep, ...arrayRemove) {
  const args = Array.from(arrayRemove);
  let newArray = [];


  //removeIndex() creates an array called 'newArray'
  //'newArray' takes the indexOf every individual element inside 'args'
const removeIndex = () => {
  for (i = 0; i < args.length; i++) {
    if (arrayKeep.includes(args[i])) {
      newArray.push(arrayKeep.indexOf(args[i]));
    } else {
      //args is null
      return null;
    }
  }
  return newArray;
}





  //logs variables before result gets returned
  const logPreResult = () => {
  //args is 'arrayRemove' converted to Array object
  //removeIndex is an array displaying the index of items found in arrayKeep that need to be removed 
  console.log("remove values: " + args, "=> " + "the values were found in indicies: " + removeIndex());
  }
  logPreResult();


  //loop and filter out whatever we return. el is essentially result[i] and index is "i"
  const result = arrayKeep.filter((el, index) => { 
    if (removeIndex() === null) {
      return arrayKeep;
    }
    // el is result[i]
    // index is 'i'
    //loop through the arguments that need to be removed to find what we need to return to filter out
    for (i = 0; i < args.length; i++) {
      if (arrayKeep.includes(args[i])) {
        
      }

      console.log("testing removal of value: " + args[i], "on element: " + el, "in indicies: " + "arrayKeep: " + index + " args: " + i);
      


      
      //return
      if (el != args[i]) {
        return el != args[i];
      }
      else {
        console.log("value " + args[i] + " was removed succesfully");
        break;
      }
    }

    
    
  });
  return result;



};
console.log(removeFromArray([1, 2, 3, 4], 2, 3, 4));

//console.log(removeFromArray(["yes", "no", "epic"], "yes"));
// Do not edit below this line
module.exports = removeFromArray;
