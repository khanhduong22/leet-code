/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const x0 = coordinates[0][0],
    y0 = coordinates[0][1],
    x1 = coordinates[1][0],
    y1 = coordinates[1][1],
    dx = x1 - x0,
    dy = y1 - y0
  for (let co of coordinates) {
    const x = co[0],
      y = co[1]
    if (dx * (y - y1) != dy * (x - x1)) return false
  }
  return true
}

console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
)
console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
)
