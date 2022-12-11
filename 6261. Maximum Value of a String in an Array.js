/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  const matchKey = strs.map((x) => (isNaN(x) ? x.length : +x))
  return Math.max(...matchKey)
}

console.log(maximumValue(['alic3', 'bob', '3', '4', '00000']))
console.log(maximumValue(['1', '01', '001', '0001']))
