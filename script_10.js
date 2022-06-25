'use strict'
let numb = prompt('Inter the number', '');
if (numb > 0) {
    alert('1')
}
else if (numb <0) {
    alert('-1')
}
else if (numb == 0) {
    alert('0')
}
else if (numb is not Number) {
    alert('Ты ввёл букву')
}
