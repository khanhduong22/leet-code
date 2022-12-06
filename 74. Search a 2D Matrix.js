/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const arr = matrix.flat()

  let lo = -1,
    hi = arr.length
  while (lo + 1 < hi) {
    let mid = lo + Math.floor((hi - lo) / 2)
    console.log(lo, mid, hi)
    if (arr[mid] === target) return true
    if (arr[mid] > target) {
      hi = mid
    } else {
      lo = mid
    }
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
)

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
)
