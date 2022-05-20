interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

// array ❌  단일 연결 리스트 ⭕️

type StackNode = {
  readonly value: string;
  readonly next?: StackNode; // 값이 있고 없을 수 있다.
  // next: StackNode | undefined; 로 쓰기도 한다.
};

class StackImpl implements Stack {
  private _size: number = 0; // 내부에서 쓰이는 변수에는 _를 앞에 붙여준다. 그리고 이거랑 동일한 public 변수가 있다는 것을 알려줌
  private head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    // 외부에서 접근 가능하게 size 정의
    return this._size;
  }
  push(value: string) {
    if (this._size === this.capacity) {
      throw new Error("Stack is Full!!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is empty!!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(8);
stack.push("ellie 1");
stack.push("bob 2");
stack.push("steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
