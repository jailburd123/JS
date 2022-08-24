
let number1 = 5;
let number2 = 3;

let pizzaSlice = 7;
let people = 5;


// +	Addition
console.log(number1 + number2);
console.log(number2 + number1);

// -	Subtraction
console.log(number1 - number2);
console.log(number2 - number1);

/*
    3 * 5 = 15
    5 * 3 = 15
*/

// *	Multiplication
console.log(number1 * number2);
console.log(number2 * number1);
// **	Exponentiation 

/*
 5^3 = 125 <- 5 * 5 = 25 * 5 = 125
 3^5 = 243 <- 3 * 3 = 9 * 3 = 27 * 3 = 81 * 3 = 243
*/
console.log(number1 ** number2);
console.log(number2 ** number1);
// Division

/*
    5 / 3 = 1.66666667
    3 / 5 = 0.6
 */


console.log(number1 / number2);
console.log(number2 / number1);

// %	Modulus (Remainder)
/*
    5 % 3 = 2
    3 % 5 = 3 

    slice of pizza =      slice 6, slice7
    people = 5

    // opposite 
    slice1, slice2, slice3, slice4, slice5, slice6, slice7 

    person1 = slice1,
    person2 = slic2,
    person3 = slice3,  
    person4 = slice4,
    person5 = slice5, 

*/

// console.log(number1 % number2);
// console.log(number2 % number1);

console.log(people % pizzaSlice);


// ++	Increment
let incrementValue = 4;

console.log(++incrementValue);

for(let i = 0; i < 10; i++){
    console.log(i);
}


// --	Decrement
let decrementValue = 5;
console.log(--decrementValue);

for(let i = 10; i > 0; i--){
    console.log(i);
}

// == Equal to
let equal1Value = '7';
let equal2Value = 7;

console.log(equal1Value == equal2Value);


// === strictly equal to


console.log(equal1Value === equal2Value);