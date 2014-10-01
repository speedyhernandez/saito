/*global define, doc*/
define(function () {
    'use strict';
    var theContent = doc.getElementById('content'),
        i = 0,
        hrs = theContent.querySelectorAll('hr'),
        len = hrs.length,
        aSpan = doc.createElement('span'),
        aNode;

    aSpan.className = 'hr-logo';

    while (i < len) {
        theContent.insertBefore(aSpan.cloneNode(), hrs[i]);
        i += 1;
    }
});