class MyStack {
  constructor(){
    this.index = 0;
    this.arr = []; // 이거는 동적 배열을 선언한건데 이렇게 구현해도 문제는 없습니다. 하지만 지금은 배열의 사이즈를 계산하면서 차근차근 배워보는것도 나쁘지않을것같네요..
  }
  myPush(value){
    this.arr[this.index] = value;
    this.index += 1
  }
  myPop(){
    if ( this.index <= 0 ) return null; // 조건부도 아래에 만들어둔 isEmpty를 사용하면 더 깔끔할것같네요
    return this.arr[--this.index]
  }
  myPeek(){
    return this.arr[this.index]; // 올바른 결과가 나오는지 확인해봐야할것같아요..
  }
  // isEmpty 결과값이 boolean으로 예상되는 함수로 throw new Error()를 던지는것은 다른 개발자가 해당 코드를 실행했을때 예상치 못한 결과를 받을 수 있을꺼같네요..
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
