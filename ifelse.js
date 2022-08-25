/**
 * if the age of the person is 21 or older they can drink
 * otherwise they are not allowed to drink
 */


let age = 12;
let gender = 'male';
let hairColor = 'blonde';
let height = 'tall';

if (age >= 21 && height == 'tall') {
    console.log(" You can drink! ");
} else if (gender == 'female'){
    console.log(" You can drink! ");
} else if (hairColor == 'brunette'){
    console.log(" You can drink! ");
} else {
    console.log('You are not allowed to drink');
}


