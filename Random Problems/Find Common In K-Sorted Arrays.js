/*
Find common elements in  k-sorted arrays [[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]] The answers is [1,2]
*/

// 1st Approach => Using Sets
function commonInSortedArrays(inputArray){
    const commonElements = [];
    inputArray.sort((a,b)=> a.length - b.length);
    const smallArr = inputArray[0];
    const inputSet = inputArray.map((arr) => new Set(arr));
    
    smallArr.forEach((ele) => {
        if(inputSet.every((arrSet) => arrSet.has(ele))){
            commonElements.push(ele);
        }
    })
    return commonElements;
}

console.log(commonInSortedArrays([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]]))


// 2nd Approach => Using HashMap 
function commonInSortedArrays(inputArray){
    const inputSet = inputArray.map((arr) => new Set(arr));
    const inputArrayFlatted = inputSet.map((set) => [...set]).flat();
    
    const hashMap = {};
    
    inputArrayFlatted.forEach((e) => {
        hashMap[e] = (hashMap[e] + 1) || 1;
    })
    
    return Object.entries(hashMap).filter((e) => e[1] === inputArray.length).map((e) => +e[0]);
}

console.log(commonInSortedArrays([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]]))
