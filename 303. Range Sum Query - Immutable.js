/**
 * @param {number[]} numbers
 */
class NumArray {
  // naive count when call approach
  // constructor(numbers) {
  //   this.numbers = numbers
  // }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  // sumRange(left, right) {
  // let sum = 0
  // while (left <= right) {
  //   sum += this.numbers[left++]
  // }
  // return sum
  // }

  // prefix sum approach
  constructor(numbers) {
    this.sums = []
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
      this.sums.push(sum)
    }
  }

  sumRange(left, right) {
    return left === 0
      ? this.sums[right]
      : this.sums[right] - this.sums[left - 1]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(numbers)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
var param_1 = obj.sumRange(0, 2)
var param_2 = obj.sumRange(2, 5)
var param_3 = obj.sumRange(0, 5)
console.log(param_1)
console.log(param_2)
console.log(param_3)
