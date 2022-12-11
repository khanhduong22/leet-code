/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const hashMap = new Map()
  // calculate the number of soldiers each row
  for (let i = 0; i < mat.length; i++) {
    hashMap.set(
      i,
      mat[i].reduce((sum, num) => sum + num)
    )
  }

  // sort the result ascending
  const sortedMap = [...hashMap].sort(
    ([, value1], [, value2]) => value1 - value2
  )

  // return indices
  return sortedMap.map((x) => x[0]).splice(0, k)
  // TC: O(r*c)
  // SC: O(r*c)
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
)

console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
)
