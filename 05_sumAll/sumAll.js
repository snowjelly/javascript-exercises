const sumAll = function(start, end) {
let sum = 0;
let add = 0;

if (start < end) {
    for (i = start; i < end + 1; i++) {
        // 1 + 2 + 3 + 4
        add++;
        console.log(add);
        sum += add;
    }
} else {
    for (i = end; i < start + 1; i++) {
        // 1 + 2 + 3 + 4
        add++;
        console.log(add);
        sum += add;
    }
}


return sum;
};
console.log(sumAll(5, 1));
// Do not edit below this line
module.exports = sumAll;
