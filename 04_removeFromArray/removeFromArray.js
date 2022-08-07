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
  };

  //logs variables before result gets returned
  const logPreResult = () => {
    //args is 'arrayRemove' converted to Array object
    //removeIndex is an array displaying the index of items found in arrayKeep that need to be removed
    console.log(
      "remove values: " + args,
      "=> " + "the values were found in indicies: " + removeIndex()
    );
  };
  logPreResult();

  let argsPosCount = 0;
  //loop and filter out whatever we return. el is essentially result[i] and index is "i"
  const result = arrayKeep.filter((el, index) => {
    // if (removeIndex() === null) { this was failing a test lol
    //   return arrayKeep;
    // }
    while (argsPosCount != -1) {
      // el is result[i]
      // index is 'i'
      //loop through the arguments that need to be removed to find what we need to return to filter out
      if (argsPosCount < args.length) {
        console.log(
          "testing removal of value: " + args[argsPosCount],
          "on element: " + el,
          "in indicies => " + "arrayKeep: " + index + " args: " + argsPosCount
        );
      }

      //return

      if (el != args[argsPosCount] && argsPosCount < args.length) {
        argsPosCount++;
        continue;
      } else if (argsPosCount < args.length) {
        console.log("value " + args[argsPosCount] + " was removed succesfully");
        argsPosCount = 0;
        console.log("argsPosCount: reset");
        break;
      } else {
        console.log("argsPosCount: reset");
        argsPosCount = 0;
        console.log("el: " + el + " is passed into the array");
        return el;
      }
    }

    // console.log(index, arrayKeep.length, argsPosCount, args.length);
  });
  return result;
};
console.log(removeFromArray([1, 2, 3, 4], 4, 1, 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
