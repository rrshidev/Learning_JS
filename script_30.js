'use strict'

function multiplyNumeric(menu) {
    for (let i in menu) {
        if (typeof menu[i] == 'number') {
            menu[i] *= 2;
        }
        
    }
    return menu;    
}

let menu = {
    width: 200,
    heigth: 300,
    title: 'My menu'
};

multiplyNumeric(menu);

for (let i in menu) {
    alert(menu[i]);
}




    


