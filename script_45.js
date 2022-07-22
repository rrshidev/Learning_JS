'use strict'

function truncate(str, maxLength) { 
    alert(str.substr(0, maxLength)+'...' );
};

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);