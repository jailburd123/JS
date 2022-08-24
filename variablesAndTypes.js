

// Boolean type.
let value = false;

if(value == true){
   console.log("our boolean is true: ", value); 
}else{
    console.log("our boolean is false: ", value);
}

// Null type.
let nullValue = null;
console.log(nullValue);


// Undefined type.
let undefinedValue;
console.log(undefinedValue);


// Number type.
let numberType = 5500;
console.log(typeof(numberType));
// BigInt type.
let bigIntType = 9999999999999999n;
console.log(bigIntType);

// String type.
let helloMessage = '45';
console.log(typeof(helloMessage))

// Symbol type.
let person = {
    firstName: "Josh",
    lastName: 'B',
    age: 35,
    eyeColor: 'hazel'
}

let id = Symbol('id');
person[id] = 45821;


console.log(person[id]);

Symbol('number') == Symbol('number');

// Object


let car = {
    fuelType: 'gasoline',
    wheelCount: '4',
    doors: '2',
}

console.log(car.fuelType);
console.log(car.wheelCount);
console.log(car.doors);

// variables

let myVariable = 'Pride and Prejudice is set in rural England at the turn of the 19th century, and it follows the Bennet family, which includes five very different sisters. The eldest, Jane, is sweet-tempered and modest. She is her sister Elizabeth’s confidant and friend. Elizabeth, the heroine of the novel, is intelligent and high-spirited. She shares her father’s distaste for the conventional views of society as to the importance of wealth and rank. The third daughter, Mary, is plain, bookish, and pompous, while Lydia and Kitty, the two youngest, are flighty and immature.'; 
let number1 = 5;
let number2 = 2;

for(let i = 1; i <= 5; i++){
    console.log(number1 + number2);
}


