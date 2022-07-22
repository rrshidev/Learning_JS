'use strict'

function read(numb) {
    if (numb == null || numb == '') {return alert('null')
    } else if (isFinite(numb) == true) {
        alert(`You inter number: ${numb}`);
    } else {
        alert('You inter not a number! Please, repeat your input.','');
        return read(prompt('Inter a number:',''));
    }
};
    



read(prompt('Inter a number:',''));