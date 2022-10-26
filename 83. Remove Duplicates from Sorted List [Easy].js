/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// 1st Method: Sorted or UnSorted
var deleteDuplicates = function(head) {
        let current = head;
        let temp;
        let prev;
        let listSet = new Set();
    
        while(current){
            if(listSet.has(current.val)){
                prev.next = current.next;
                delete(current);
                current = prev.next;
            }else{
                prev = current;
                listSet.add(current.val);
                current = current.next;
            }
        }
    
    return head;
};


// 2nd Method: If Sorted List 
var deleteDuplicates = function(head) {
        let current = head;
        let temp;
    
        while(current && current.next){
                   if(current.val === current.next.val){
                       temp = current.next.next;
                       delete(current.next);
                       current.next = temp;
                   }else{
                       current = current.next;
                   }
              }
    return head;
};
