/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((s) => s !== "")
    .reverse()
    .join(" ")
}

// let result = s
//   .trimEnd()
//   .trimStart()
//   .replaceAll(/\s+/g, " ")
//   .split(" ")
//   .reverse()
// console.log(result)
// return result.reduce((final, item) => final + " " + item)
// }

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("  hello     2      world2  "))
console.log(reverseWords("a good   example"))
