 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1st Method : To Return Indices
var twoSum = function(nums, target) {
    let hashMap = {};
    for(let i = 0; i < nums.length ; i++){
        const wanted = target - nums[i];
        if(hashMap.hasOwnProperty(wanted)){
            return [hashMap[wanted], i];
        }else{
            hashMap[nums[i]] = i;
        }
    }
};



// 2nd Method : To Return Values [Using Hash Map]
var twoSum = function(nums, target) {
    const hashMap = {};
    
    for(let i = 0; i < nums.length; i++){
        const wantedNum = target - nums[i];
        if(hashMap.hasOwnProperty(wantedNum)){
            return [wantedNum , nums[i]];
        }else{
            hashMap[nums[i]] = i;
        }
    }
};



// 3rd Method : To Return Values [Using Set]
var twoSum = function(nums, target) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++){
        const wantedNum = target - nums[i];
        if(set.has(wantedNum)){
            return [wantedNum , nums[i]];
        }else{
            set.add(nums[i]);
        }
    }
};



// 4th Method : To Return Values [Using Two Pointers]
var twoSum = function(nums, target) {
    nums.sort((a , b) => a - b);
    
    let i = 0;
    let j = nums.length - 1;
    
    while(i < j){
        if(nums[i] + nums[j] === target){
            return [nums[i], nums[j]];
        }else if(nums[i] + nums[j] < target){
            i++;
        }else if(nums[i] + nums[j] > target){
            j--;
        }
    }
};

