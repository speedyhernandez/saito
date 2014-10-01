/*global globalMethodObj*/
globalMethodObj.toggleModal = function () {
    'use strict';
    var theModal = doc.getElementById('media-modal'),
        theOverlay = doc.getElementById('overlay');

    if (!theModal.className || theModal.className === 'show') {
        theModal.className = 'hide';
        theOverlay.className = 'hide';

        theModal.querySelector('iframe').setAttribute('src', '');
    } else {
        theModal.className = 'show';
        theOverlay.className = 'show';
    }
};