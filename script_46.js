'use strict'

function extractCurrencyValue(str) {
    let num = +str.slice(1);
    return num;
};

alert( extractCurrencyValue('$120') === 120 );