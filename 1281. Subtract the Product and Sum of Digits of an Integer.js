/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const product = n
    .toString()
    .split("")
    .reduce((result, x) => result * +x, 1)
  const sum = n
    .toString()
    .split("")
    .reduce((result, x) => result + +x, 0)
  return product - sum
}

console.log(subtractProductAndSum(234))
console.log(subtractProductAndSum(4421))
console.log(subtractProductAndSum(4294967293))
// console.log(subtractProductAndSum(00000000000000000000000000001011))
// console.log(subtractProductAndSum(00000000000000000000000010000000))
// console.log(subtractProductAndSum(11111111111111111111111111111101))
