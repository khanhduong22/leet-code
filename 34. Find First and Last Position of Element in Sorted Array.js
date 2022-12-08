/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function getStart(nums) {
    let lo = -1,
      hi = nums.length
    while (lo + 1 < hi) {
      const mid = Math.floor((lo + hi) / 2)

      nums[mid] >= target ? (hi = mid) : (lo = mid)
    }

    if (nums[hi] !== target) return [-1, -1]
    return hi
  }

  function getEnd(nums) {
    let lo = -1,
      hi = nums.length
    while (lo + 1 < hi) {
      const mid = Math.floor((lo + hi) / 2)

      nums[mid] <= target ? (lo = mid) : (hi = mid)
    }

    return lo
  }

  const start = getStart(nums)
  const end = getEnd(nums)
  return typeof start === 'object' ? start : [start, end]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 10))
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 7))
console.log(searchRange([5, 7, 7, 8, 8, 10], 5))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([5, 7, 7, 8, 8, 10], 4))
console.log(searchRange([], 0))
console.log(searchRange([1], 1))
