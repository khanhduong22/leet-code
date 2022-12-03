/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length === 2) return true

  arr.sort((a, b) => a - b)

  const difference = arr[1] - arr[0]
  for (let i = 1; i < arr.length - 1; i++) {
    const firstNumber = arr[i]
    const secondNumber = arr[i + 1]
    if (secondNumber - firstNumber !== difference) return false
  }

  return true
}

console.log(canMakeArithmeticProgression([3, 5, 1]))
console.log(canMakeArithmeticProgression([1, 2, 4]))
console.log(canMakeArithmeticProgression([1, 2, 4, 1, 2, 4]))
