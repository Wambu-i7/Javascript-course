function getMin(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(getMin(2, 5));

function pow(x, n) {
    return x ** n;
}
console.log(pow(3, 2));

//Arrow functions
//square
const square = num => num * num;
console.log(square(4));

const greet = name => `Hello ${name}!`;
console.log(greet('Rose'));

setTimeout(() => {
    console.log("Time's up!");
  }, 2000);
  
const multiply = (a, b) => a * b;
console.log(multiply(3, 5)); 

