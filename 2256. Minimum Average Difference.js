/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
  // Time Limit Exceeded approach
  // const temp1 = []
  // const temp2 = [...nums]
  // let min
  // let minIndex = 0
  // if (nums.length === 1) return 0
  // const average = (numbers) => {
  //   return !numbers.length
  //     ? 0
  //     : Math.floor(
  //         [...numbers].reduce((sum, number) => sum + number, 0) / numbers.length
  //       )
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   const element = nums[i]
  //   temp1.push(element)
  //   temp2.shift()
  //   console.log(temp1)
  //   console.log(temp2)
  //   console.log(Math.abs(average(temp1) - average(temp2)))
  //   let abs = Math.abs(average(temp1) - average(temp2))
  //   let tempMin = min
  //   min = Math.min(abs, min ?? abs)
  //   console.log(tempMin)
  //   console.log(min)
  //   if (min < tempMin) minIndex = i
  //   console.log(minIndex)
  //   if (!min) break
  // }
  // return minIndex
  // TC: O(n2)
  // SC: O(1)

  const sumOfAllNumbers = [...nums].reduce((sum, num) => sum + num)
  const len = nums.length

  let subSum = 0
  let min
  let minIndex = 0

  // nums.forEach((number, i) => {
  for (let i = 0; i < len; i++) {
    const number = nums[i]

    subSum += number
    const averageFirst = Math.floor(subSum / (i + 1))
    const averageSecond =
      len - i - 1 ? Math.floor((sumOfAllNumbers - subSum) / (len - i - 1)) : 0
    const abs = Math.abs(averageFirst - averageSecond)

    const tempMin = min
    min = Math.min(abs, min ?? abs)
    if (min < tempMin) minIndex = i
    if (!min) break
  }
  // })
  return minIndex
  // TC: O(n)
  // SC: O(1)
}

console.log(minimumAverageDifference([2, 5, 3, 9, 5, 3]))
console.log(minimumAverageDifference([0]))
