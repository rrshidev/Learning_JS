'use strict'
let userName = prompt('Ты кот?', '');
if (userName =='админ') {
    let passWord = prompt('Тогда вводи пароль:', '');
    if (passWord == '123qwerty') {
        alert('Hello, master!')
    } 
    else if (passWord === '' || passWord == null) {
        alert('Отменено')
    }
    else {
        alert('Not rigth. Try again')
    }
}

else if (userName ==='' || userName === null) {
    alert('Отменено!')
}
else {
    
    alert('Я тебя не знаю! Проваливай!')
}