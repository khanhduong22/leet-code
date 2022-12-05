/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // counting frequency approach
  if (s.length !== t.length) return false
  const hashMap = new Map()
  for (const letter of s) {
    hashMap.set(letter, (hashMap.get(letter) ?? 0) + 1)
  }

  for (const letter of t) {
    if (!hashMap.get(letter)) return false
    hashMap.set(letter, hashMap.get(letter) - 1)
  }

  return [...hashMap.values()].every((count) => !count)

  // sorting approach
  // return [...s].sort().join() === [...t].sort().join()
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('ab', 'a'))
console.log(isAnagram('ac', 'bb'))
console.log(isAnagram('aacc', 'ccac'))
