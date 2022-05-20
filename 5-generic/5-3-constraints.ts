interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmplyee implements Employee {
  pay() {
    console.log(`Part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function paybad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 함수 제네릭 조건 걸기
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmplyee();

const ellieAfterPay = paybad(ellie);
const bobAfterPay = paybad(bob);

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🦈",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🦈
