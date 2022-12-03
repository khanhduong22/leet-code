/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let result = false
  // nums.sort((a, b) => a - b)

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i + 1]) return true
  // }

  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], false)
    } else {
      result = true
      break
    }
  }

  return result
}

console.log(containsDuplicate([3, 5, 1]))
console.log(containsDuplicate([1, 2, 4]))
console.log(containsDuplicate([1, 2, 4, 1, 2, 4]))

console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 1, 1]))
console.log(containsDuplicate([3, 1, 2, 10, 1]))

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
