/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split("")
    .reduce((total, x) => total + (x === "1" ? 1 : 0), 0)
}

console.log(hammingWeight(11))
console.log(hammingWeight(128))
console.log(hammingWeight(4294967293))
// console.log(hammingWeight(00000000000000000000000000001011))
// console.log(hammingWeight(00000000000000000000000010000000))
// console.log(hammingWeight(11111111111111111111111111111101))
