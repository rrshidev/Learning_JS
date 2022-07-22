'use strict'

function spamTester(request) {
    let spamSearcher = prompt('Inter a spamKeyWord:','Viagra or XXX');
        spamSearcher = spamSearcher.trim().replace(/[0-9]/g,"").toUpperCase();
        request.includes(spamSearcher)?alert('Warning!SPAM!'):alert('Sector clear!');
};

let request = prompt('Inter a spam text:','');
request = request.trim().replace(/[0-9]/g,"").toUpperCase();

spamTester(request);