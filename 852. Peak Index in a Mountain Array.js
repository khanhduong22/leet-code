/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  // type: maximization
  // scale: `lo` -> valid (-1), `hi` -> invalid (arr.length)
  // initialize: `lo` to `-1`, `hi` to `arr.length`
  // condition: `f(number, nextNumber) = number < nextNumber`

  let lo = -1,
    hi = arr.length
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (arr[mid] < arr[mid + 1]) {
      lo = mid
    } else {
      hi = mid
    }
  }
  return lo + 1 // === hi
}

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))

console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 5, 10, 5, 2]))
console.log(peakIndexInMountainArray([0, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2]))
