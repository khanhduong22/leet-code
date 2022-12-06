/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lo = -1,
      hi = n
    while (lo + 1 < hi) {
      const mid = Math.floor((lo + hi) / 2)
      console.log(lo, mid, hi)
      if (isBadVersion(mid)) {
        hi = mid
      } else {
        lo = mid
      }
    }

    return hi
  }
}

console.log(solution(5, 4))
console.log(solution(1, 1))
