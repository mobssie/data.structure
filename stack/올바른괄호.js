function solution(s){
  const MAX = 100_000;
  const stack = new MyStack(MAX);

  for (let i=0; i<s.length; i++) {
      if (stack.myPeek() === '(' && s[i] === ')') {
          stack.myPop();
      } else {
          stack.myPush(s[i]);
      }
  }
  
  return stack.isEmpty();
}

class MyStack {
constructor(size){
  this.index = 0;
  this.area = Array(size).fill(null);
  this.size = size;
}
myPush(value){
  if(this.index === this.size) throw new Error('스택이 꽉 찼어요.');
  this.area[this.index] = value;
  this.index += 1
}
myPop(){
  if ( this.isEmpty() ) throw new Error('스택이 없습니다.');
  this.area[--this.index] = null
}
myPeek(){
  return this.area[this.index-1];
}
isEmpty(){
  return this.index === 0
}
}