/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  // return s.toLowerCase()

  //Calculate Ascii diff from a to A
  const DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
  return [...s].reduce(
    (lower, letter) =>
      lower +
      (letter <= 'Z' && letter >= 'A'
        ? String.fromCharCode(letter.charCodeAt() + DIFF)
        : letter),
    ''
  )
}

console.log(toLowerCase('Hello'))
console.log(toLowerCase('here'))
console.log(toLowerCase('LOVELY'))
