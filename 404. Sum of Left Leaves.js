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
var sumOfLeftLeaves = function (root) {
  // let sum = 0

  // function dfs(node, { isLeft }) {
  //   if (!node) return
  //   const { val, left, right } = node

  //   if (isLeft && !left && !right) sum += val

  //   if (left) dfs(left, { isLeft: true })
  //   if (right) dfs(right, { isLeft: false })
  // }

  // dfs(root, { isLeft: false })

  // return sum

  function bfs(node) {
    const queue = [node]
    let sum = 0

    while (queue.length !== 0) {
      const len = queue.length
      console.log('len', len)

      for (let i = 0; i < len; i++) {
        const { val, left, right, isLeft } = queue[i]
        if (isLeft && !left && !right) {
          sum += val
          console.log(sum, val)
        }
        if (left) {
          left.isLeft = true
          queue.push(left)
        }
        if (right) queue.push(right)
      }

      queue.splice(0, len)
    }

    return sum
  }

  return bfs(root)
}
