/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let lo = -1,
    hi = letters.length
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2)
    console.log(lo, mid, hi)
    if (letters[mid] > target) {
      hi = mid
    } else {
      lo = mid
    }
  }

  return letters[hi] ?? letters[0]
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'))

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'))
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'))
