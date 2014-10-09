/*globals define, win*/
define(function (require) {
    'use strict';
    var lib = require('./lib');
    win.body.addEventListener('click', function (e) {

        var aMethod = e.target.getAttribute('data-method');

        if (aMethod && lib[aMethod] !== undefined) {
            lib[aMethod](e);
        }

        e.stopPropagation();
    });

    lib.mediaHandles();
});