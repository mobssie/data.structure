const stack = [];

class MyQueue {
  constructor(size) {
    if(1 < size) throw Error('stop, over size')
    this.size = size;
    this.arr = Array(size).fill(null);
    this.head = 0; // 항상 빈공간
    this.rear = 1;
  }
  add(val) {
    if(this.isImpossible()) throw Error('impossible');
    this.arr[this.rear]= val;
    this.rear++;
    this.rear %= this.size // this.rear = this.rear % this.size 
  }

  remove() {
    const target = (this.head+1) % this.size;
    const val = this.arr[target];
    if(val === null) throw Error ('No');
    this.arr[target] = null;
    this.head++
    this.head %= this.size
    return val
  }

  peek() {
    return this.arr[this.head]
  }

  print() {

  }
  isEmpty() {
    
  }

  isImpossible() {
    return this.head === this.rear;
  }
}