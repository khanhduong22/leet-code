/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max
  for (const account of accounts) {
    let sum = 0
    for (const money of account) {
      sum = sum + money
    }
    if (!max) max = sum
    max = Math.max(max, sum)
  }
  return max
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
)
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
)
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
)
