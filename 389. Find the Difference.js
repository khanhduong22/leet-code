/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // if (!s) return t

  // const hash = new Map()

  // for (const letter of s) {
  //   hash.has(letter)
  //     ? hash.set(letter, hash.get(letter) + 1)
  //     : hash.set(letter, 1)
  // }

  // for (const letter of t) {
  //   if (hash.has(letter)) hash.set(letter, hash.get(letter) - 1)
  //   if (!hash.has(letter)) return letter
  //   if (hash.get(letter) < 0) return letter
  // }

  // return String.fromCharCode(
  //   t.split('').reduce((acc, letter) => acc + letter.charCodeAt(), 0) -
  //     s.split('').reduce((acc, letter) => acc + letter.charCodeAt(), 0)
  // )

  let result
  for (const char of s + t) {
    result ^= char.charCodeAt()
  }
  return String.fromCharCode(result)
}

console.log(findTheDifference('abcd', 'abcde'))
console.log(findTheDifference('a', 'aa'))
console.log(findTheDifference('', 'y'))
