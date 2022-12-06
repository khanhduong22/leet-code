/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  // // naive approach
  // let count = 0
  // for (const col of grid) {
  //   for (const row of col) {
  //     if (row < 0) count++
  //   }
  // }
  // return count
  // TC: O(n+m)
  // SC: O(1)

  let count = 0
  for (const col of grid) {
    console.log(count)
    count += BS(col)
  }
  return count

  function BS(arr) {
    let lo = -1,
      hi = arr.length
    while (lo + 1 < hi) {
      const mid = Math.floor((lo + hi) / 2)
      console.log(lo, mid, hi)
      if (arr[mid] > -1) {
        lo = mid
      } else {
        hi = mid
      }
    }

    return arr.length - hi
  }
  // TC: O(nlogm)
  // SC: O(1)
}

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
)
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
)
