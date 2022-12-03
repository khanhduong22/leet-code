/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let result
  const min = Math.min(...salary)
  const max = Math.max(...salary)
  const sum = salary.reduce((total, item) => total + item, 0 - max - min)
  console.log(Math.min(...salary))
  console.log(Math.max(...salary))
  console.log(sum)

  console.log(salary.length - 2)
  return result
}

// console.log(average([4000, 3000, 1000, 2000]))
console.log(average([1000, 2000, 3000]))
