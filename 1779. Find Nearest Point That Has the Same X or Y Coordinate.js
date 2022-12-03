/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let result = -1
  let distance = undefined
  for (let i = 0; i < points.length; i++) {
    // check valid point
    if (points[i][0] === x || points[i][1] === y) {
      // init distance
      if (distance === undefined) {
        distance = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)
        result = i
      }
      // check minimum distance
      if (distance > Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)) {
        distance = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)
        result = i
      }
    }
  }

  return result
}

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
)
console.log(nearestValidPoint(3, 4, [[3, 4]]))
console.log(nearestValidPoint(3, 4, [[2, 3]]))
console.log(
  nearestValidPoint(1, 1, [
    [1, 1],
    [1, 1],
  ])
)
