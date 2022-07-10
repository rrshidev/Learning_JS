'use strict'

let browser = prompt('Какой у вас brawser?','');

if (browser == 'Edge') {
  alert('It is very bad choice, dude! Get out');
}
else if (browser == 'Chrome' || 
browser == 'Firefox' || 
browser == 'Safari' ||
browser ==  'Opera') {
  alert('Not bad, not bad...');
}
else {
  alert('WTF!?')
}
/*
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}*/