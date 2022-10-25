// Not LeetCode Problem

/*
[1,2,4,5][4,5,9,3] output [1,2,4,5,9,3]
*/

// 1st Method:
function merge(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const mergedSet = new Set(mergedArray);
    return [...mergedSet];
}

console.log(merge([1, 2, 4, 5], [4, 5, 9, 3]));


// One Line Answer
function merge(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(merge([1, 2, 4, 5], [4, 5, 9, 3]));
