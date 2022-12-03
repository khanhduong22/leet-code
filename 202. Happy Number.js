/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const hadNumber = new Set()
  while (!hadNumber.has(n)) {
    hadNumber.add(n)
    n = n
      .toString()
      .split("")
      .reduce((acc, x) => acc + Number(x) ** 2, 0)
  }
  console.log(n)

  return n == 1 ? true : false
}

console.log(isHappy(2))
console.log(isHappy(3))
console.log(isHappy(4))
console.log(isHappy(5))
console.log(isHappy(6))
console.log(isHappy(7))
console.log(isHappy(19))
console.log(isHappy(100))
console.log(isHappy(102))
console.log(isHappy(20))
console.log(isHappy(30))
