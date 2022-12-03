/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let result
  const min = Math.min(...salary)
  const max = Math.max(...salary)
  // required skip max and min
  const sum = salary.reduce((total, item) => total + item, 0 - max - min)
  return sum / (salary.length - 2)
}

console.log(average([4000, 3000, 1000, 2000]))
console.log(average([1000, 2000, 3000]))
