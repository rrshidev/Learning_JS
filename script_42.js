'use strict'

function random() {
    let min = +prompt('Inter a minimum:', '0');
    let max = +prompt('Inter a maximum:', '0');
    let randomMinMax = (Math.random() * (max - min) ) + min;
    alert(randomMinMax);
};

random();

