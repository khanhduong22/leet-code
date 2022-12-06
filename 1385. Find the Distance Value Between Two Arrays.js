/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
// var findTheDistanceValue = function (arr1, arr2, d) {
//   return arr1.filter((n1) => arr2.every((n2) => Math.abs(n1 - n2) > d)).length
// }

var findTheDistanceValue = function (arr1, arr2, d) {
  const sortedArr2 = [...arr2].sort((a, b) => a - b)
  let count = 0

  for (let i = 0; i < arr1.length; i++) {
    count += binarySearch(arr1[i], sortedArr2, d)
  }

  return count
}

function binarySearch(currentValue, arr, distance) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (Math.abs(arr[mid] - currentValue) <= distance) {
      return 0
    } else if (arr[mid] >= currentValue) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return 1
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2))
