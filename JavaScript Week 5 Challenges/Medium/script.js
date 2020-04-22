/*
MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
Input: [1 , 4 , 7]  Output: 4
Input: [10, 5]  Output: 7.5
Input: [1.5, 3, 2.5, 1]  Output: 2
*/

const nums = [10, 11, 12, 13, 14];

function getAvg(nums) {
  const total = nums.reduce((acc, c) => acc + c, 0);
  return total / nums.length;
}

const average = getAvg(nums);
console.log(average);
