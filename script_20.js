'use strict'
for (let i = 2; i <= 10; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
        let x = i%j;
        if (x == 0) {
            cnt++;
        }
    }
    if (cnt == 2) {
        alert(i);

    }
}
/*
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}*/