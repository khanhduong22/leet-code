/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  function isVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return vowels.some((vowel) => letter === vowel)
  }

  let left = 0,
    right = 0
  s.split('').forEach((letter, i) => {
    if (isVowel(letter)) {
      i < s.length / 2 ? left++ : right++
    }
  })

  return left === right

  // const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  // const vowelCount = (word) =>
  //   [...word].reduce(
  //     (count, letter) => (vowels.has(letter) ? count + 1 : count),
  //     0
  //   )

  // return (
  //   vowelCount(s.slice(0, s.length / 2)) === vowelCount(s.slice(s.length / 2))
  // )
}

console.log(halvesAreAlike('book'))
console.log(halvesAreAlike('textbook'))
console.log(halvesAreAlike('hihi'))
