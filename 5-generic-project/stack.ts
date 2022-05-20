{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  // array ❌  단일 연결 리스트 ⭕️

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>; // 값이 있고 없을 수 있다.
    // next: StackNode | undefined; 로 쓰기도 한다.
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0; // 내부에서 쓰이는 변수에는 _를 앞에 붙여준다. 그리고 이거랑 동일한 public 변수가 있다는 것을 알려줌
    private head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size() {
      // 외부에서 접근 가능하게 size 정의
      return this._size;
    }
    push(value: T) {
      if (this._size === this.capacity) {
        throw new Error("Stack is Full!!");
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty!!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(8);
  stack.push("ellie 1");
  stack.push("bob 2");
  stack.push("steve 3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(8);
  stack2.push(123);
  stack2.push(456);
  stack2.push(789);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
