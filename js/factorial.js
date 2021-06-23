let num = 7;

function factorial (n) {
    return n ? n * factorial (n - 1) : 1
}

console.log (factorial (num));