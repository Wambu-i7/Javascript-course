const coder = {
    "first Name": "Rose",
    lastName: "Ndikiru",
    age: 28,
    employed: false,
}
console.log(typeof coder);
console.log(coder['first Name']);
console.log(coder.employed);
for (let key in coder)
     {
    console.log(key +":" + coder[key]);
}
