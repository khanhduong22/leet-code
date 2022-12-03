/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let start
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] !== " " && !start) start = i
    if (start > -1 && (s[i - 1] === " " || !s[i - 1])) {
      return start - i + 1
    }
  }
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("a "))
console.log(lengthOfLastWord(" a"))
console.log(lengthOfLastWord(" a "))
