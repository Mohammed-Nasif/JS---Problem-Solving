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
