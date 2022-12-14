/**
 * @param {number[][]} matrix
 * @return {number}
 */
function minFallingPathSum(
  [firstRow, ...remainingRows],
  sums = firstRow.map((value) => 0)
) {
  if (!firstRow) return Math.min(...sums)
  const nextSums = sums.map((sum, i) => {
    return (
      firstRow[i] +
      Math.min(sums[i - 1] ?? Infinity, sums[i], sums[i + 1] ?? Infinity)
    )
  })
  return minFallingPathSum(remainingRows, nextSums)
}

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
)

// console.log(
//   minFallingPathSum([
//     [2, 1, 3, 11],
//     [6, 5, 4, 12],
//     [7, 8, 9, 13],
//     [17, 16, 15, 14],
//   ])
// )

// console.log(
//   minFallingPathSum([
//     [-19, 57],
//     [-40, -5],
//   ])
// )
