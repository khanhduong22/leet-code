/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = []
  const map = new Map()
  const hashTable = {}

  // for (let i = 0; i < nums2.length; i++) {
  //   const element = nums2[i]
  //   map.set(element, i)
  // }
  for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i]
    hashTable[element] = i
  }

  for (let n of nums1) {
    const t0 = performance.now()
    // const idx = nums2.indexOf(n)
    // nums2.indexOf(n)
    // map.get(n)
    // const idx = map.get(n)
    const t1 = performance.now()
    console.log(`${t1 - t0} milliseconds.`)
    let c = idx + 1,
      found = -1
    while (nums2[idx] > nums2[c]) c++
    if (c < nums2.length) found = nums2[c]
    res.push(found)
  }
  return res
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
