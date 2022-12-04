/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  // let result = head.val + ''
  // // loop to get all values and merged in result
  // while (head.next !== null) {
  //   result += head.next.val
  //   head = head.next
  // }
  // // parse binary to decimal
  // return parseInt(result, 2)

  let num = head.val
  while (head.next !== null) {
    num = num * 2 + head.next.val
    head = head.next
  }

  return num
}
