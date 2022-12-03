/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const hashTable = new Map()
  arr.forEach((x) => {
    if (hashTable.has(x)) {
      hashTable.set(x, hashTable.get(x) + 1)
    } else hashTable.set(x, 0)
  })

  const noDuplicates = new Set()
  hashTable.forEach((value) => {
    console.log(value)
    noDuplicates.add(value)
  })

  return noDuplicates.size === hashTable.size
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1, 2]))
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))
