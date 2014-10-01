/*global globalMethodObj, define, win, doc, theBody*/
var scrollBaseElement;

if (win.mozInnerScreenX || document.documentMode) {
    // IE or FF
    scrollBaseElement = doc.getElementsByTagName('html')[0];
} else {
    scrollBaseElement = theBody;
}


globalMethodObj.scroller = function (e) {
    'use strict';
    var theHref = e.target.getAttribute('href'),
        targetEle = doc.querySelector(theHref),
        targetOffset = targetEle.offsetTop,
        baseOffset = scrollBaseElement.scrollTop,
        duration = 4000,
        difference = targetOffset - baseOffset,
        perTick,
        scrollToVar;

    if (theHref === '#top') {
        scrollBaseElement.scrollTop = 0;
        return;
    }

    if (baseOffset >= targetOffset - 10) {
        return;
    }

    if (difference >= 10) {
        perTick = difference / duration;
        perTick *= 750;
    } else {
        perTick = 2;
    }

    scrollToVar = scrollBaseElement.scrollTop + perTick;

    if (scrollToVar >= targetOffset) {
        scrollToVar = targetOffset;
    }

    setTimeout(function () {
        var durationVar = duration - 10;

        scrollBaseElement.scrollTop = scrollToVar;
        globalMethodObj.scroller(e);
    }, 10);
};