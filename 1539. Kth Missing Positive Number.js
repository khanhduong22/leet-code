/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let lo = 0,
    hi = arr.length

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)
    console.log(lo, mid, hi)
    if (arr[mid] - 1 - mid < k) {
      lo = mid + 1
    } else {
      hi = mid
    }
    console.log(lo, hi)
  }

  return hi + k
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2))
console.log(findKthPositive([2], 1))
console.log(findKthPositive([1, 2], 1))
console.log(findKthPositive([1, 3], 1))
