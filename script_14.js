'use strict'
let age = prompt('Введите возвраст:','')
if (!(age >= 14 && age <= 90)) {
    alert('Ты в танцах');
}
else {
    alert('Ты не в танцах');
}