/*global define, doc*/
define(function () {
    'use strict';
    var theContent = doc.getElementById('content'),
        i = 0,
        mediaHandles = theContent.querySelectorAll('#throws div a, #kata div a'),
        len = mediaHandles.length;

    while (i < len) {
        mediaHandles[i].setAttribute('data-method', 'modal');
        i += 1;
    }
});