/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let max = 0
  while (grid.flat().length > 0) {
    let subMax = 0
    console.log(grid.flat())
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i]
      const { numbers, possibleMax } = helper(row)
      row = numbers

      console.log(possibleMax)
      subMax = Math.max(subMax, possibleMax)
    }
    console.log(subMax)
    max += subMax
    console.log(max)
  }

  function helper(numbers) {
    let possibleMax = 0
    for (const number of numbers) {
      possibleMax = Math.max(possibleMax, number)
    }

    numbers.splice(numbers.indexOf(possibleMax), 1)

    // console.log(numbers, m);
    return { numbers, possibleMax }
  }

  return max
}

console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ])
)
console.log(deleteGreatestValue([[10]]))
