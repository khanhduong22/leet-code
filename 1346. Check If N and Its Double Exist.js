/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  // const hashMap = new Map()

  // for (let index = 0; index < arr.length; index++) {
  //   const half = arr[index] / 2
  //   hashMap.set(arr[index], { half, index })
  // }

  // console.log(hashMap)

  // for (let index = 0; index < arr.length; index++) {
  //   const half = arr[index] / 2
  //   if (hashMap.has(half) && index !== hashMap.get(half)?.index) return true
  // }

  // return false

  const set = new Set()

  for (let i = 0; i < arr.length; i++) {
    const currValue = arr[i]

    if (set.has(currValue)) {
      return true
    }
    set.add(currValue / 2)
    set.add(currValue * 2)
  }

  return false
}

console.log(checkIfExist([10, 2, 5, 3]))

console.log(checkIfExist([3, 1, 7, 11]))

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]))

console.log(checkIfExist([-2, 0, 10, 0, -19, 4, 6, -8]))

console.log(checkIfExist([0, 0]))
