'use strict'

let num1 = prompt('INter 1st number:', '');
let num2 = prompt('Inter 2nd number:', '');

function sumOfNumber(a, b) {
    let x = parseFloat(a) + parseFloat(b);
    return x;
};


alert(sumOfNumber(num1, num2));

