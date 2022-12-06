/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let lo = -1,
    hi = num + 1
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2)
    console.log(lo, mid, hi)
    if (mid * mid === num) return true
    if (mid * mid > num) {
      hi = mid
    } else {
      lo = mid
    }
  }
  return false
}

console.log(isPerfectSquare(49))
console.log(isPerfectSquare(36))
console.log(isPerfectSquare(25))
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(15))
console.log(isPerfectSquare(4)) // 0 1 2 3 4 F F T F F
console.log(isPerfectSquare(1))
