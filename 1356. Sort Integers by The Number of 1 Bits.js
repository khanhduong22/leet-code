/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  function countBits(number) {
    const bits = number.toString(2).match(/1/g)
    return bits ? bits.length : 0
    // return [...number.toString(2)].reduce((sum, number) => sum + +number, 0)
  }

  return arr.sort(
    (key1, key2) => countBits(key1) - countBits(key2) || key1 - key2
  )
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))
console.log(sortByBits([0, 1, 8, 2, 3, 4, 5, 6, 7]))
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]))
console.log(sortByBits([10000, 10000]))
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))

console.log((10000 >>> 0).toString(2))
console.log((1 >>> 0).toString(2))
console.log((2 >>> 0).toString(2))
console.log((4 >>> 0).toString(2))
console.log((8 >>> 0).toString(2))
console.log((16 >>> 0).toString(2))

console.log((3 >>> 0).toString(2))
console.log((5 >>> 0).toString(2))
console.log((6 >>> 0).toString(2))

console.log((7 >>> 0).toString(2))
