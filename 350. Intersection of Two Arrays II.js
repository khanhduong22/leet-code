/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const hashMap1 = new Map()
  const hashMap2 = new Map()
  const result = []

  for (const number of nums1) {
    hashMap1.set(number, (hashMap1.get(number) ?? 0) + 1)
  }
  for (const number of nums2) {
    hashMap2.set(number, (hashMap2.get(number) ?? 0) + 1)
  }

  if (nums1.length < nums2.length) {
    for (const number of nums1) {
      if (hashMap2.has(number) && hashMap2.get(number)) {
        result.push(number)
        hashMap2.set(number, hashMap2.get(number) - 1)
      }
    }
  } else {
    for (const number of nums2) {
      if (hashMap1.has(number) && hashMap1.get(number)) {
        result.push(number)
        hashMap1.set(number, hashMap1.get(number) - 1)
      }
    }
  }

  return result
  // TC: O(n + m)
  // SC: O(n + m)
}

// [2,2]
console.log(intersect([1, 2, 2, 1], [2, 2]))

// [4,9] or [9,4]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
