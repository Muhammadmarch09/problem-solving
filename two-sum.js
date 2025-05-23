// Given an array of integers nums and an integers target

//  return indeces of two numbers such that they add up to target

// PseudoCode :

//   function (nums, target)

//     for i from 0 to length of nums - 1

//         for j from i + 1 to length of nums

//             if num[i] + num[j] == target THAN 

//                 return [i, j]

// Solution

function twoSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; i++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}


console.log(twoSum([2,3,1,5,6],6))