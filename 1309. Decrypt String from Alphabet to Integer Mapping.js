/**
 * @param {string} s
 * @return {string}
 */
// var freqAlphabets = function (s) {
// let result = ''
// for (let i = 0; i < s.length; i++) {
//   let change = ''
//   if (s[i] && s[i + 1]?.toString().match(/\d/) && s[i + 2] === '#') {
//     change = String.fromCharCode(Number(s[i] + s[i + 1]) + 96)
//     i = i + 2
//     result += change
//     continue
//   }
//   change = String.fromCharCode(Number(s[i]) + 96)
//   result += change
// }

// return result

// use RegExp to split pattern
//   return s.match(/\d{2}(?=#)|\d/g).reduce((mapping, letter) =>
//     return mapping + String.fromCharCode(96 + +letter)
//   , '')
// }

const map = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j',
  11: 'k',
  12: 'l',
  13: 'm',
  14: 'n',
  15: 'o',
  16: 'p',
  17: 'q',
  18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z',
}
const freqAlphabets = (s) =>
  s.replace(/(\d\d#|\d)/g, (t) => map[t.length === 3 ? t[0] + t[1] : t])

console.log(freqAlphabets('10#11#12'))
console.log(freqAlphabets('1326#'))
