/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    if (!nums[i]) {
      nums.push(...nums.splice(i, 1))
      length--
      i--
    }
  }
}

// nums = [0, 1, 0, 3, 12]
// nums = [0, 0, 1]
nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)

// nums = [0]
// moveZeroes(nums)
// console.log(nums)
