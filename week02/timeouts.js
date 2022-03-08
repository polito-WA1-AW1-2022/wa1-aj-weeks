'use strict';

// console.log(1) ;

let x = 0;

console.log(x, new Date());

x++;
const currentX = x;

setTimeout( () => {
    console.log(currentX, x, new Date()); x=30;
}, 2000);

setTimeout( () => {
    console.log(currentX, x, new Date()); x=40;
}, 1999);

x++;

console.log(x, new Date());

x++;
