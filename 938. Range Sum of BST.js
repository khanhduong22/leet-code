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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0
  function dfs(node) {
    const { val, left, right } = node
    if (val <= high && val >= low) {
      sum += val
    }
    if (left && low < val) dfs(left)
    if (right && val < high) dfs(right)
  }

  dfs(root)
  return sum
  // TC: O(n)
  // SC: O(n)

  // const stack = [root]
  // let sum = 0

  // while (stack.length) {
  //   const { val, left, right } = stack.pop()
  //   if (val <= high && val >= low) {
  //     sum += val
  //   }

  //   if (left && low < val) stack.push(left)
  //   if (right && val < high) stack.push(right)
  // }

  // return sum
  // TC: O(n)
  // SC: O(n)
}
