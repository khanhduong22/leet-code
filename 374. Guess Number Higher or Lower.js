/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  // type: minimization
  // scale: `lo` -> invalid (- 1), `hi` -> valid (n)
  // initialize: `lo` to `- 1`, `hi` to `n`
  // condition: `int guess(int num)`
  let lo = -1,
    hi = n
  while (lo + 1 < hi) {
    let mid = lo + Math.floor((hi - lo) / 2)
    if (!guess(mid)) return mid
    if (guess(mid) < 0) {
      hi = mid
    } else {
      lo = mid
    }
  }
  return hi
}
