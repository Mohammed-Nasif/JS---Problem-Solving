/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 1st Method: Using Ternary Operator
var intersection = function(nums1, nums2) {
        const result = new Set();
        const nums1Set = new Set(nums1);
        const nums2Set = new Set(nums2);

    nums1.length < nums2.length ? 
        nums1Set.forEach((num) => {
            if(nums2Set.has(num)){
                result.add(num);
            }
        }):
         nums2Set.forEach((num) => {
            if(nums1Set.has(num)){
                result.add(num);
            }
        });
    
    return [...result];
};


// 2nd Method: Using If Condition
var intersection = function(nums1, nums2) {
        const result = new Set();
        const nums1Set = new Set(nums1);
        const nums2Set = new Set(nums2);

        if(nums1.length < nums2.length){
            nums1Set.forEach((num) => {
                if(nums2Set.has(num)){
                    result.add(num);
                }
            })
        }else{
            nums2Set.forEach((num) => {
                if(nums1Set.has(num)){
                    result.add(num);
                }
            })
        }
    return [...result];
};




    
