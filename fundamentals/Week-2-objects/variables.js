let w = 1;
let x = 2;
let y = 3;
let z = 4;


console.log('Before swap:', w, x, y, z);
//right swap
let temp = z; 
z = y; 
y = x; 
x = w;
w = temp; 

console.log('After swap:', w, x, y, z);


