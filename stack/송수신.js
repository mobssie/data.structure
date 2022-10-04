function solution(arr){
  let stack = [];
  let answer = [];

  for(let i=arr.length-1; i >= 0; i--) {
    stack.push(arr[i]);
  }
  console.log('stack', stack)
  for(let i=0; i<stack.length; i++){
    for(let j=i+1; j < stack.length; j++){
      if(stack[i] <= stack[j]){
        console.log('i :: ', i)
        console.log('j :: ', j)
        console.log('arr[i]', arr[i])
        console.log('arr[j]', arr[j])
        answer.push(arr.length-j)
      } else {
        console.log('i ::: ', i)
        answer.push(0);
      }
    }
  }
  console.log('answer :: ',answer)
}

let arrList = [6, 9, 5, 7, 4];
solution(arrList);
