'use strict'

function A() {
    this.name = 'Jedi';
    return {name: 'Jedi'};

}
function B() {
    this.name = 'Jedi';
    return {name: 'Jedi'}   ;

}

let a = new A;
let b = new B;

alert(a.name == b.name);