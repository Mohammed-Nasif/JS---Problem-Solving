var MyStack = function(){
    this.stack = [];
    this.length = 0;
}

MyStack.prototype.push = function(value){
    this.stack.push(value);
    this.length++;
}

MyStack.prototype.pop = function(){
    this.length--;
    return this.stack.pop();
}

MyStack.prototype.peek = function(){
    return this.stack[this.length - 1];
}


var MyQueue = function() {
    this.stack1 = new MyStack();
    this.stack2 = new MyStack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.stack1.length > 0) {
            const poopedItem = this.stack1.pop();
            this.stack2.push(poopedItem);
        }

        this.stack2.push(x);

        while (this.stack2.length > 0) {
            const poopedItem = this.stack2.pop();
            this.stack1.push(poopedItem);
        }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
   return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
