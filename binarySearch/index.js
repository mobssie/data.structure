data([1,2,3,4,5,6,7,8,9,10], 7)
function data(arr, target){
  let [left, right] = [0, arr.length]
  while(left < right){
    let mid = Math.floor((left+right)/2);
    if(arr[min]<target) left = mid + 1
    else right = mid
  }
}