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
var maxProduct = function (root) {
  function sumOfNode(node) {
    const { val, left, right } = node
    const sumLeft = left ? sumOfNode(left) : 0
    const sumRight = right ? sumOfNode(right) : 0

    totalOfAllNode.push(sumLeft, sumRight)
    return val + sumLeft + sumRight
  }

  const totalOfAllNode = []
  const totalSumOfAllNode = sumOfNode(root)
  let max = 0

  for (let totalOfNode of totalOfAllNode) {
    const possibleMax = totalOfNode * (totalSumOfAllNode - totalOfNode)

    max = Math.max(max, possibleMax)
  }

  return max % (10 ** 9 + 7)
}
