/*globals globalMethodObj, theBody*/
theBody.addEventListener('click', function (e) {
    'use strict';
    var theHandle = e.target,
        theHandleName = theHandle.nodeName,
        theParent = theHandle.parentNode,
        theParentName = theParent.nodeName;

    e.preventDefault();

    if (theHandle.getAttribute('data-method')) {
        globalMethodObj[theHandle.getAttribute('data-method')](e);
    }

    e.stopPropagation();
});