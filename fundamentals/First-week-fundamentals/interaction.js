/*const name = prompt("What is your name?");

if (name) {
    const sure = confirm("Are you sure?");
    if (sure) {
        alert(`Welcome, ${name}!`);
    }
        alert('Goodbye!');
} else {
    alert("You did no enter a name");
}
*/
console.log(Number("123"));   // ?
console.log(Number("Hello")); // ?
console.log(Number(true));    // ?
console.log(Number(false));   // ?
console.log(Number(null));    // ?
console.log(Number(undefined)); // ?
 //If lse statement
let age +prompt('What is your age?');
if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('Sorry you are a minor');
}

 //using ternary ?

 let age = 2;
 let message = (age >= 18) ? 'You can vote' :'Sorry minor';
 console.log(message);
