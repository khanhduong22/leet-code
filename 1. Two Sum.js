/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  if (nums.length < 3) return [0, 1]
  for (let index = 0; index < nums.length; index++) {
    const test = new Map()
    if (map.has(nums[index]) && map.get(nums[index]) !== index)
      return [map.get(nums[index]), index]
    map.set(target - nums[index], index)
    console.log(map)
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 2, 3], 6))
