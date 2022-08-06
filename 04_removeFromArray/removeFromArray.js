const removeFromArray = function (arrayKeep, ...arrayRemove) {
  const args = Array.from(arrayRemove);
  let searchIndex = [];

  
const createSearchIndex = function () {
    for (i = 0; i < arrayRemove.length; i++) {
        searchIndex.push(arrayKeep.indexOf(args[i]));
    }
    return console.log(searchIndex);
}


const killSearchIndex = function () {
  return console.log(searchIndex = []);
}


for (i = 0; i < arrayKeep.length; i++) {
    if (arrayKeep.includes(args[i])) {
        createSearchIndex();
    }
}

for (i = 0; i < createSearchIndex.length; i++) {
    return arrayKeep.filter((el) => el.includes)
}


};
console.log(removeFromArray([1, 2, 3, 4], 3, 4));

//console.log(removeFromArray(["yes", "no", "epic"], "yes"));
// Do not edit below this line
module.exports = removeFromArray;
