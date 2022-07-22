'use strict'

function sumInput(){
  let arrForSum = [];
  let sum = 0;
  while (true) {
    let numForSum = prompt('Inter number for summary:, please', '0');
    
    if (numForSum === '' || numForSum === null || !isFinite(numForSum)) break;

    arrForSum.push(numForSum) 
  };
  
  for (let i of arrForSum) {
    i = +i;
    sum += i; 
  };
  return sum;
};

alert(sumInput());