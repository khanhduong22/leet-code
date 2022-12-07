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
var oddEvenList = function (head) {
  if (!head || !head.next) return head // Watch out for edge cases! (0 or 1 item)

  // Core strategy: make 2 chains (odds/evens) by "leapfrogging".
  // No need to keep track of a counter or extra pointers, just need these 3:
  let odd = head
  let even = head.next
  const evenHead = head.next

  // ("even.next" means more to go since even pointer is rightmost)
  // ("even &&" is there to avoid null reference error, but also for even positions)
  while (even && even.next) {
    odd.next = even.next // assign to
    odd = odd.next // jump to next

    even.next = odd.next // assign to
    even = even.next // jump to next
  }

  // Connect the two chains: (tail of odds to head of evens)
  odd.next = evenHead

  return head
}