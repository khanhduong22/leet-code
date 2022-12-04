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
var middleNode = function (head) {
  // naive approach, find the length of the list
  let size = 1
  let headClone = head
  while (head.next !== null) {
    size++
    head = head.next
  }

  // find the middleNode
  let half = Math.floor(size / 2)
  while (headClone.next !== null && half > 0) {
    half--
    headClone = headClone.next
  }
  return headClone
  // TC: O(n)
  // SC: O(3)

  // // two pointers approach, use the first to find the middleNode
  // // and the second to reach the end
  // let slow = head,
  //   fast = head
  // while (fast !== null && fast.next !== null) {
  //   slow = slow.next
  //   fast = fast.next?.next ?? null
  // }
  // return slow
  // TC: O(n/2)
  // SC: O(2)
}
