/*let hasLicense = confirm('Do you have a license?');
let ownsCar = confirm('Do you own a car?');
if (hasLicense && ownsCar){
    console.log('You can drive');
} else {
    console.log('You cannot drive');
}
*/
//A value is defined if its neither null nor undefined.
let user = null;
//if user is defined then user it is. If it isn't defined then guest.
//user is nul so the first defined is Guest.
console.log(user ?? "Guest");

let name = "Rose";
//name is defined so the variable under name will be printe to the console.
console.log(name ?? "Guest");
