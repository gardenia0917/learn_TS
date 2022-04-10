/**
 * Let's make a game 🕹
 */
type Commands = 'up' | 'down' | 'left' | 'right'

const position = {
    x: 0,
    y: 0
}

function move(command: Commands){
    switch (command) {
        case 'up':
            return position.y++;
         case 'down':
            return position.y--;
         case 'left':
            return position.x--;
         case 'right':
            return position.x++;
         default:
            throw Error('unknown command')
    }
}
// return문 없이 하려면 case 끝날때 break;를 걸어주자!

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
