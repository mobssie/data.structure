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
    if ( stack.isEmpty() ) throw new Error('스택이 없습니다.');
    this.index -= 1;
    const result = this.area[this.index] = null
    return result
  }
  myPeek(){
    return this.area[this.index];
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