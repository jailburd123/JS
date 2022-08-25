/**
 * Write a program that prints the numbers from 1 to 100 
 * for multiples of ‘3’ print “Fizz” instead of the number
 * for the multiples of ‘5’ print “Buzz”. 
 * Hint: if '3' and '5' can go into the number print both outputs
 */

// while loop

// let i = 0;

// while (i < 100) {
//     if (i % 15 == 0){
//         console.log('FizzBuzz');
//     } else if (i % 3 == 0){
//         console.log('Fizz');
//     } else if (i % 5 == 0){
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
//     i++;
// }


// for loop
// for(let x = 0; x <= 100; x++){
//     if(x % 15 ==0){
//         console.log('FizzBuzz');
//     } else if(x % 3 == 0){
//         console.log('Fizz');
//     } else if(x % 5 == 0){
//         console.log('Buzz');
//     } else{
//         console.log(x);
//     }    
// }


let arr = [];
arr.length = 101;
arr.fill('');

arr.forEach((num, i) => {
    switch(true && i !== 0){
      case i % 15 === 0:
        console.log('FizzBuzz');
        break;
        case i % 3 === 0:
            console.log('Fizz');
            break;
        case i % 5 === 0:
            console.log('Buzz');
            break;
        default:
            i !== 0 ? console.log(i) : null;
            break;
    }
});


for (let i = 0; i < 100;){
    console.log((++i  % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
}