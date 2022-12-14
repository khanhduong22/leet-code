/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const set = new Set()
  const result = []

  for (const number of nums) {
    if (Number.isInteger(number ** 2)) set.add(number ** 2)
    if (Number.isInteger(number ** 0.5)) set.add(number ** 0.5)
  }

  for (const number of nums) {
    if (set.has(number)) result.push(number)
  }

  let max = 0
  for (const number of result) {
    max = Math.max(max, helper(number, result))
  }

  function helper(number, arr, maxStreak = 0) {
    if (arr.includes(number ** 2)) {
      maxStreak += helper(number ** 2, arr)
    }
    return maxStreak + 1
  }

  return max ? max : -1
}

console.log(longestSquareStreak([4, 3, 6, 16, 8, 2]))
console.log(longestSquareStreak([2, 3, 5, 6, 7]))
console.log(longestSquareStreak([4, 3, 6, 16, 8, 2, 32, 9, 81, 36, 64, 256]))
