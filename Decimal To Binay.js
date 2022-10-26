// Not LeetCode Problem


// 1st Method: Using Stack

// Stack Implementaion
function Stack (){
    this.stack = [];
}
Stack.prototype.push = function(x){
    this.stack.push(x);
}
Stack.prototype.pop = function(){
    return this.stack.pop();
}
Stack.prototype.isEmpty = function(){
    return this.stack.length === 0;
}


function decToBinary(decNum){
    let rem = 0; 
    let result = "";
    let st = new Stack();
    
    while(decNum > 0){
        rem = Math.floor(decNum % 2);
        st.push(rem);
        decNum = Math.floor(decNum/2);
    }
    
    while(!st.isEmpty()){
        result += st.pop();
    }
    
    return parseInt(result);
}

console.log(decToBinary(10));



// 2nd Method: Using ToString Method
function decToBinary(decNum){
    return (decNum).toString(2);
}

console.log(decToBinary(12));
