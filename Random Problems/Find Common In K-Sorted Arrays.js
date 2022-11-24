/*
Find common elements in  k-sorted arrays [[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]] The answers is [1,2]
*/

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
