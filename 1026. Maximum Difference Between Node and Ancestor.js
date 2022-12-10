/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  let result = 0

  function helper(node, max, min) {
    if (!node) return
    const { val, left, right } = node

    max = Math.max(max, val)
    min = Math.min(min, val)
    let possibleResult = Math.max(Math.abs(max - val), Math.abs(min - val))
    result = Math.max(result, possibleResult)
    console.log(result, max, min, val)

    if (left) helper(left, max, min)
    if (right) helper(right, max, min)
  }

  helper(root, 0, 10 ** 5)
  return result
  // TC: O(n)
  // SC: O(n)
}
