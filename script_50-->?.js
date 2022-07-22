'use strict'

function getMaxSubSum(arr) {
  let max = 0;
  let sum = 0;
  let total = 0;
  let sumIn = 0;
  let cnt = 0;

  for (let key of arr) {
    key = +key;
    if (key >= max) {
      max = key;
    } else {
      continue;
    };  
  };

  for (let i = 0; i < arr.length; i++) {
    let numI = +arr[i];
    //alert(`NUMI: ${numI}`);
    for (let j = i+1; j < arr.length; j++ ) {
      let numJ = +arr[j];
      if (numI + 1 === numJ && cnt > 0) {
        sumIn += numJ;
        cnt += 1;
        alert(cnt);
        i++;
      } else if (numI + 1 === numJ) {
        sumIn += numJ + numI; 
        sum += sumIn; 
        sumIn = 0;
        numI = numJ;
        cnt += 1;
        i++;
        alert(cnt);
        
      }else {
        sumIn = 0;
        i++;
        cnt = 0;
        break;
      };
    
    };  
    if (sumIn === 0 && total < sum) {
      total = sum;
      //sum = 0; 
    };
   
  };
  alert(`total: ${total}`);
  alert(`max: ${max}`);
  if (total > max) {
    alert(total);
  }else {
    total = max;
    alert(total);
    sumIn = 0;
  };
  
};

let arr =  [-1, 2, 3, -9, 55, 56, 57, -1, -2,-3, 33, 34, 345];//345
getMaxSubSum(arr);
arr = [2, -1, 2, 3, -9];  
getMaxSubSum(arr);// == 6? должно быть 5 =)
arr = [-1, 2, 3, -9, 11];
getMaxSubSum(arr);// == 11
arr = [-2, -1, 1, 2];
getMaxSubSum(arr);// == 3
arr = [100, -9, 2, -3, 5];
getMaxSubSum(arr);// == 100
arr = [1, 2, 3];
getMaxSubSum(arr);// == 6 (берём все