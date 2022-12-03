/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = nums.length - 3; i >= 0; --i) {
    if (nums[i] + nums[i + 1] > nums[i + 2])
      return nums[i] + nums[i + 1] + nums[i + 2]
  }
  return 0
}

console.log(largestPerimeter([2, 1, 2]))
console.log(largestPerimeter([1, 2, 1]))
console.log(largestPerimeter([3, 2, 3, 4]))
console.log(largestPerimeter([3, 6, 2, 3]))
