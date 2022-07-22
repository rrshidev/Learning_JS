'use strict'

function bigFirstSymbol() {
    let str = prompt('Введите строку в любом регистре:', '');//вводим строку в любом регистре
    str = str.trim();//страховка от пустоты
    str = str.replace(/[0-9]/g,"");//удаляем цифры из строки
    let strFinal = str[0].toUpperCase() + str.slice(1).toLocaleLowerCase();//переводим в верхний регистр 1й+регистроустойчивость остатка
    alert(strFinal);//вывод
};

bigFirstSymbol();
