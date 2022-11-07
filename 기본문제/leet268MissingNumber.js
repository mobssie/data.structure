

var missingNumber = function(nums) {
  let n = nums.length;
  let arr = Array.from({length:n+1}, (_,i)=> i)
  function logic(arr) {
      return arr.reduce((arr, cur)=> arr + cur, 0)
  }
  return logic(arr) - logic(nums);
};