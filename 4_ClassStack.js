class MyStack {
  constructor(){
    this.index = 0;
    this.arr = [];
  }
  myPush(value){
    this.arr[this.index] = value;
    this.index += 1
  }
  myPop(){
    if ( this.index <= 0 ) return null;
    return this.arr[--this.index]
  }
  myPeek(){
    return this.arr[this.index];
  }
  isEmpty(){
    if(this.index === 0 || this.arr.length === 0 ) return new Error('없어')
  }
}
let stack = new MyStack();

stack.myPush(11);
stack.myPush(22);
stack.myPush(33);
console.log(stack.myPop());
console.log(stack.myPop());
console.log(stack.myPeek());