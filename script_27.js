'use strict'


let emptyObj = {};

emptyObj.name = 'John';
emptyObj.surname = 'Smith';
emptyObj.name = 'Pete';

delete emptyObj.name;



alert(emptyObj.name);
alert(emptyObj.surname);