/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
  let sum = 0
  let j = mat[0].length - 1

  for (let i = 0; i < mat.length; i++, j--) {
    if (i !== j) sum += mat[i][j]
    sum += mat[i][i]
  }

  return sum
}

console.log(
  diagonalSum([
    [
      [6, 3, 1, 10, 7, 4],
      [4, 10, 1, 9, 5, 10],
      [5, 5, 7, 3, 8, 5],
      [2, 7, 6, 4, 7, 6],
      [7, 9, 6, 1, 8, 5],
      [1, 7, 9, 5, 8, 4],
    ],
  ])
)
console.log(
  diagonalSum([
    [7, 3, 1, 9],
    [3, 4, 6, 9],
    [6, 9, 6, 6],
    [9, 5, 8, 5],
  ])
)
console.log(
  diagonalSum([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ])
)
console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
)
console.log(diagonalSum([[5]]))
