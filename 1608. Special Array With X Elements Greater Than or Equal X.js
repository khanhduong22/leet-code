/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  const freq = new Array(1001).fill(0)
  for (let n of nums) freq[n]++

  for (let i = 1000, cnt = 0; i >= 0; i--) {
    cnt += freq[i]
    if (i == cnt) return i
  }

  return -1

  // const N = nums.length
  // let l = 0,
  //   r = N - 1

  // nums.sort((a, b) => a - b)

  // while (l < r - 1) {
  //   let mid = l + ((r - l) >> 1)
  //   let x = N - mid

  //   if (nums[mid] >= x && x > nums[mid - 1]) return x

  //   nums[mid] < x ? (l = mid) : (r = mid)
  // }

  // let x = N - l
  // return nums[l] >= x ? x : -1
}

console.log(specialArray([3, 5]))
console.log(specialArray([0, 0]))
console.log(specialArray([0, 4, 3, 0, 4]))

// console.log(specialArray([2, 7, 11, 15]))
// console.log(specialArray([2, 3, 4]))
// console.log(specialArray([-1, 0]))

// console.log(specialArray([1, 2, 7, 11, 15]))
// console.log(specialArray([-1, 1, 2]))
// console.log(specialArray([-2, 1, 2, 3]))
// console.log(specialArray([1, 2, 3, 4, 4, 9, 56, 90]))
