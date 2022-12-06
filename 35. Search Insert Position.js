/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // type: minimization
  // scale: `lo` -> invalid (- 1), `hi` -> valid (nums.length)
  // initialize: `lo` to `- 1`, `hi` to `nums.length`
  // condition: `f(number) = number < target`

  let lo = -1,
    hi = nums.length
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] > target) {
      hi = mid
    } else {
      lo = mid
    }
  }

  // in minimization template, hi contains the return index
  return hi
}

console.log(searchInsert([-1, 0, 3, 5, 9, 12], 9))
console.log(searchInsert([-1, 0, 3, 5, 9, 12], 2))
console.log(searchInsert([-1, 0, 3, 5, 9, 12, 15], 2))

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
