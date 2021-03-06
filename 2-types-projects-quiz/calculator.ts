/**
 * Let's make a calculator ๐งฎ
 */
// ๋์ ๋ต
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

console.log(calculate('add', 1, 3)); // 4 // ๋ํ๊ธฐ
console.log(calculate('substract', 3, 1)); // 2  // ๋นผ๊ธฐ
console.log(calculate('multiply', 4, 2)); // 8 // ๊ณฑํ๊ธฐ
console.log(calculate('divide', 4, 2)); // 2 // ๋๋๊ธฐ
console.log(calculate('remainder', 5, 2)); // 1  // ๋จ์ด์ง๋ ๊ฐ %
