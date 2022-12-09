/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // let firstIndex = 0,
  //   secondIndex = 0
  // for (let index = 0; index < numbers.length; index++) {
  //   let subTarget = target - numbers[index]
  //   firstIndex = index + 1
  //   if (bs(subTarget)) break
  // }

  // function bs(subTarget) {
  //   let lo = -1,
  //     hi = numbers.length

  //   while (lo + 1 < hi) {
  //     const mid = Math.floor((lo + hi) / 2)
  //     console.log(lo, mid, hi)
  //     console.log(numbers[mid])
  //     console.log(subTarget)
  //     console.log(firstIndex)
  //     if (numbers[mid] === subTarget && mid + 1 !== firstIndex) {
  //       secondIndex = mid + 1
  //       return true
  //     }
  //     if (numbers[mid] > subTarget) {
  //       hi = mid
  //     } else {
  //       lo = mid
  //     }
  //     console.log(lo, mid, hi)
  //     secondIndex = mid + 1
  //   }
  // }
  // console.log(firstIndex, secondIndex)
  // return [firstIndex, secondIndex]
  // TC: O(nlogn)
  // SC: O(1)

  // two pointers approach
  let left = 0,
    right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) return [left + 1, right + 1]
    sum < target ? left++ : right--
  }
  // TC: O(n)
  // SC: O(1)
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))

console.log(twoSum([1, 2, 7, 11, 15], 9))
console.log(twoSum([-1, 1, 2], 1))
console.log(twoSum([-2, 1, 2, 3], 1))
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8))
