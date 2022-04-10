/**
 * Let's make a calculator 🧮
 */
// 나의 답
// type Cal = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'

// function calculate(cal: Cal, num1: number, num2: number):number {
//     if (cal === 'add') {
//         return num1+num2
//     }
//     else if(cal === 'substract') {
//         return num1-num2
//     }
//     else if(cal === 'multiply') {
//         return num1*num2
//     }
//     else if(cal === 'divide') {
//         return num1/num2
//     }
//     else if(cal === 'remainder') {
//         return num1%num2
//     }
// }

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'

function calculate(command: Command, a: number, b: number): number {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command')
    }
}

console.log(calculate('add', 1, 3)); // 4 // 더하기
console.log(calculate('substract', 3, 1)); // 2  // 빼기
console.log(calculate('multiply', 4, 2)); // 8 // 곱하기
console.log(calculate('divide', 4, 2)); // 2 // 나누기
console.log(calculate('remainder', 5, 2)); // 1  // 떨어지는 값 %
