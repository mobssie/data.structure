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
let stack = new MyStack(5);

stack.myPush(11);
stack.myPush(22);
stack.myPush(33);
console.log('stack', stack)
stack.myPop()
stack.myPop()
stack.myPop()
console.log('stack', stack)