// 1st Method: [Built In Reverse]     

  const filteredArray = s.toLowerCase().match(/[a-z0-9]/g);
    
    // Special Case
    if(s.length === 1 || !filteredArray) return true;

  const filteredArrayReversed = [...filteredArray].reverse();
    return filteredArray.join("") === filteredArrayReversed.join("") ? true: false;

// 2nd Method: [Two Pointers]
  const filteredArray = s.toLowerCase().match(/[a-z0-9]/g);
    
    // Special Case
    if(s.length === 1 || !filteredArray) return true;

    let i = 0; 
    let j = filteredArray.length - 1;
    
    for(; i < filteredArray.length / 2 , j > i; i++, j--){
        if(filteredArray[i] !== filteredArray[j]) return false;
    }
    return true;
    
// 3rd Method: [Using Two Stacks]

const stack1 = new Stack();
    const stack2 = new Stack();
    
    for(let i = 0; i < filteredArr.length; i++){
       stack1.push(filteredArr[i]);
    }
    
    const stack1Clone = stack1.buffer();
    
    while(stack1Clone.length){
        stack2.push(stack1Clone.pop());
    }
    
    while(stack1.length && stack2.length){
        if(stack1.pop() !== stack2.pop()) return false;
    }
    return true;


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
Stack.prototype.buffer = function(){
    return [...this.stack];
}



    
