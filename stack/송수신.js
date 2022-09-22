function solution(arr){
  // 자료구조를 만들기 (인덱스, 높이)
  // 1. function 
  // 2. class 
  // 3. { h: 1, i : 1 }
  class Pos {
    constructor (h, i) {
     this.h = h
      this.i = i
    }
  }
  
  let stack = []
  for(let i = 0 ; i < arr.length ; i++) {
     stack.push(
      new Pos(arr[i], i)
     )
  }
  
  for(let x of stack){
    
  }
  
  
  
  // 스택에 넣어
//   console.log('arrList', arrList)
//   for(let i = 0; i < arrList.length; i++){
//     if(arrList[i][0] < arrList[i+1][0]) {
//       stack.push(arrList[i+1][1])
//     } else {
//       stack.push(0)
//     }

//     console.log('stack', stack)
//   }
}

let arr = [6, 9, 5, 10, 4];
solution(arr)