function solution(arr)
{
    const MAX = 100_000;
    var answer = [];
    let stack = new MyStack(MAX)

    for(let i = 0; i < arr.length; i++) {
        if( arr[i] !== stack.myPeek()) {
            stack.myPush(arr[i])
        }
    }
    while(!stack.isEmpty()) {
        answer.push(stack.myPeek());
        stack.myPop()
        
    }
    return answer.reverse()
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