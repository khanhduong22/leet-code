/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  // const len1 = word1.length
  // const len2 = word2.length
  // const lenMin = Math.min(len1, len2)
  // let merged = ''
  // for (let i = 0; i < lenMin; i++) {
  //   merged += word1[i] + word2[i]
  // }
  // return (
  //   merged + (len1 > len2 ? word1.substring(lenMin) : word2.substring(lenMin))
  // )

  return (
    word1
      .split('')
      .reduce(
        (merged, letter, index) => merged + letter + (word2[index] ?? ''),
        ''
      ) + word2.substring(word1.length)
  )
}

console.log(mergeAlternately('abc', 'pqr'))
console.log(mergeAlternately('ab', 'pqrs'))
console.log(mergeAlternately('abcd', 'pq'))
