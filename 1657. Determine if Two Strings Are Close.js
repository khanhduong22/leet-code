/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  //   const hash1 = new Map()
  //   const hash2 = new Map()
  //   let condition1 = true
  //   let condition2 = false

  //   for (const letter of word1) {
  //     if (!hash1.has(letter)) {
  //       hash1.set(letter, 0)
  //     }
  //     hash1.set(letter, hash1.get(letter) + 1)
  //   }

  //   for (const letter of word2) {
  //     if (!hash2.has(letter)) {
  //       hash2.set(letter, 0)
  //     }
  //     hash2.set(letter, (hash2.get(letter) ?? 0) + 1)
  //   }

  //   const value1 = []
  //   const value2 = []
  //   hash1.forEach((value, key) => {
  //     value1.push(value)
  //     if (!hash2.has(key)) condition1 = false
  //   })

  //   hash2.forEach((value, key) => {
  //     value2.push(value)
  //   })

  //   if (value1.sort().join(',') === value2.sort().join(',')) {
  //     condition2 = true
  //   }

  //   return condition1 && condition2

  const frequencies1 = [...word1].reduce(
    (map, letter) => map.set(letter, 1 + (map.get(letter) ?? 0)),
    new Map()
  )
  const frequencies2 = [...word2].reduce(
    (map, letter) => map.set(letter, 1 + (map.get(letter) ?? 0)),
    new Map()
  )

  return (
    JSON.stringify([...frequencies1.keys()].sort()) ===
      JSON.stringify([...frequencies2.keys()].sort()) &&
    JSON.stringify([...frequencies1.values()].sort()) ===
      JSON.stringify([...frequencies2.values()].sort())
  )
}

// console.log(closeStrings('abcd', 'abcde'))
// console.log(closeStrings('a', 'aa'))
// console.log(closeStrings('', 'y'))
// console.log(closeStrings('abc', 'bca'))
// console.log(closeStrings('cabbba', 'abbccc'))
// console.log(closeStrings('uau', 'ssx'))
console.log(closeStrings('cabbba', 'aabbss'))
