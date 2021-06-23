let firstNum = 3;
let secondNum = 2;

function compare (x, y) {
    if (x > y) {
        return 1;
    }

    if (x < y) {
        return -1;
    }
    if (x === y) {
        return 0;
    }
}

console.log (compare (firstNum, secondNum));

// let compare = (firstNum > secondNum) ? 1 :
//     (firstNum < secondNum) ? -1 :
//     (firstNum === secondNum) ? 0 :
//     ' ';

// console.log (compare);