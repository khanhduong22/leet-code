/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n === 1) return 1
  let lo = -1,
    hi = n
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2)
    console.log(lo, mid, hi)
    if ((mid * (mid + 1)) / 2 <= n) {
      lo = mid
    } else {
      hi = mid
    }
  }

  return lo
}

console.log(arrangeCoins(1))
console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
console.log(arrangeCoins(3))
