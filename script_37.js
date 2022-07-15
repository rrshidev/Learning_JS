'use strict'
function Calculator() {
    
    this.read = function() {
        this.a = +prompt('Inter the 1st argument:', '0');
        this.b = +prompt('Inter the 2nd argument:', '0');
    };
    this.sum = function() {
        return this.a + this.b;
        
    };
    this.mul = function() {
        return this.a * this.b;
        
    };
};

let calculator = new Calculator(); 

calculator.read();
alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());