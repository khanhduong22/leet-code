/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // // do hashMap to get the frequency
  // const hashMap = new Map()
  // for (const letter of s) {
  //   hashMap.set(letter, (hashMap.get(letter) ?? 0) + 1)
  // }

  // // sort the hash table by value to decrease frequency
  // // const sorted = [...hashMap].sort((a, b) => b[1] - a[1])
  // const sorted = [...hashMap].sort(
  //   ([, frequency1], [, frequency2]) => frequency2 - frequency1
  // )

  // // create result string by sorted hash table
  // let result = ''
  // for (const [letter, frequency] of sorted) {
  //   // for (const letterAndFrequency of sorted) {
  //   // const letter = letterAndFrequency[0]
  //   // const frequency = letterAndFrequency[1]
  //   result += letter.repeat(frequency)
  // }

  // return result

  // shorter version with built-in function of javascript
  const hashMap = [...s].reduce(
    (map, letter) => map.set(letter, (map.get(letter) ?? 0) + 1),
    new Map()
  )

  return [...hashMap]
    .sort(([, frequency1], [, frequency2]) => frequency2 - frequency1)
    .reduce(
      (result, [letter, frequency]) => result + letter.repeat(frequency),
      ''
    )
  // TC: O(n)
  // SC: O(n)
}

console.log(frequencySort('tree'))
console.log(frequencySort('cccaaa'))
console.log(frequencySort('Aabb'))
