for (let i = 1; i <= 10; i++)
{
    if (i % 2 == 0) {
        console.log(i);
    }
    
}
//numbers ina switch case for days.
let num = +prompt('enter a number between 1 and 7');
switch (num) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:    
        console.log('Sunday');
        break;
    default:
        console.log('Invalid input');
}