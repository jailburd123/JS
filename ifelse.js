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


// let time = new Date().getHours();
// console.log(time);

let time = 24;

if(time <= 8){
    console.log('early morning');
} else if(time < 12 && time > 8){
    console.log("morning");
} else if(time >= 12 && time < 13){
    console.log('LunchTime');
 } else if(time >= 13 && time < 17){
    console.log('afternoon');
 } else if (time >= 17 && time <= 20){
    console.log("evening");
 } else if(time >= 21 && time <= 23){
    console.log('Night');
 } else {
    console.log('midnight');
 }