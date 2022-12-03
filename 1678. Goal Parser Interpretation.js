/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  // return command.split('').reduce((final, letter, i) => {
  //   let parser = ''
  //   if (letter === '(' && command[i + 1] === ')') parser = 'o'
  //   if (
  //     letter === '(' &&
  //     command[i + 1] === 'a' &&
  //     command[i + 2] === 'l' &&
  //     command[i + 3] === ')'
  //   )
  //     parser = 'al'
  //   if (letter === 'G') parser = letter
  //   return final + parser
  // }, '')

  // return command.replaceAll(/\(\)/g, 'o').replaceAll(/\(al\)/g, 'al')
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
}

console.log(interpret('G()(al)'))
console.log(interpret('G()()()()(al)'))
// console.log(mergeAlternately('ab', 'pqrs'))
