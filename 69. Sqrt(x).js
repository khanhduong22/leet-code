/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0) return 0
  let start = 1,
    end = x
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2)
    if (mid <= x / mid && mid + 1 > x / (mid + 1))
      // Found the result
      return Math.floor(mid)
    else if (mid > x / mid)
      // Keep checking the left part
      end = mid
    else start = mid + 1 // Keep checking the right part
  }
  return Math.floor(start)
}

console.log(mySqrt(4))

console.log(mySqrt(8))
