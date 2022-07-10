'use strict'


let schedule = {};
let cnt = 0;

function isEmpty(schedule) {
    for (let i in schedule) {
        cnt += i
    }
    if (cnt == 0) {
        return true;
    }
    return false;

}




alert(isEmpty(schedule));
alert(cnt);