function multiplyByTwo(a) {
    let result = a * 2;
        return result;  
}
console.log('The answer is:',  multiplyByTwo(2));
console.log(multiplyByTwo(4));

function calculateArea(width, height) {
    if (width < 0 || height < 0) {
        return "Invalid dimensions";
    }
    let area = width * height;
        return area;
}
console.log('The area is:', calculateArea(20, 60));
console.log(calculateArea(-2, 25));

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } return c;
}
console.log(findMax(1, 2, 3));
console.log(findMax(7, 7, 4));

function tallyNumbers() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0){
            console.log(i);
        }
    }
}
    tallyNumbers();

function checkAge(a) {
    if (a >= 18) {
        console.log('You are an adult');
    } else console.log('You are a Minor');
}
checkAge(7);
checkAge(19);

function sumEvenNumbers(nums) {
    let sum = 0;
    for (let i = 0; i <  nums.length; i++)
    {
        if (nums[i] % 2 === 0) {
            sum += nums[i];
        }
    }
        return sum;
    }
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sumEvenNumbers([10, 15, 20, 25, 30]));

function largestEvenNumber(numbers) {
    let largeNumber = null;
    for (let i = 0; i < numbers.length; i++)  {
        if (numbers[i] % 2 === 0) {
            if (largeNumber === null || numbers[i] > largeNumber) {
                largeNumber = numbers[i];
            }     
    } 
}
//if atleast one even numbers was found, return largeNumber else return the message.
return largeNumber !== null ? largeNumber : "No even numbers found";
}
console.log(largestEvenNumber([1, 3, 5, 7, ]));