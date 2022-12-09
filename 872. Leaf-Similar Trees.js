/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  // const arr1 = []
  // const arr2 = []
  // function dfs(node, arr) {
  //   const { val, left, right } = node
  //   if (!left && !right) {
  //     arr.push(val)
  //   }
  //   if (left) dfs(left, arr)
  //   if (right) dfs(right, arr)
  // }

  // dfs(root1, arr1)
  // dfs(root2, arr2)
  // return arr1.toString() === arr2.toString()
  // TC: O(n + m)
  // SC: O(n + m)

  function stack(root) {
    const stack = [root]
    const values = []

    while (stack.length) {
      const { val, left, right } = stack.pop()
      if (!left && !right) {
        values.push(val)
      }

      if (left) stack.push(left)
      if (right) stack.push(right)
    }

    return values
  }

  return stack(root1).toString() === stack(root2).toString()
  // TC: O(n + m)
  // SC: O(n)
}
