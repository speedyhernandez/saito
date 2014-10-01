/*global globalMethodObj, doc, theBody*/
globalMethodObj.modal = function (e) {
    'use strict';
    var theHandle = e.target,
        closeText = '\u00D7',
        closeTitle = 'close',
        theImg = theHandle.getAttribute('data-img'),
        theVid = theHandle.getAttribute('data-vid'),
        videoPath = '//www.youtube.com/embed/',
        videoRel = '?rel=0',
        mediaModal = 'media-modal',
        modalTop = e.pageY,
        theModal = doc.getElementById(mediaModal),
        aFrag,
        aDiv = doc.createElement('div'),
        addDiv,
        overlayId = 'overlay',
        anOverlay = doc.getElementById(overlayId),
        aWrapper,
        aHeader,
        aSpan,
        anImg,
        anIframe;

    theVid = videoPath + theVid + videoRel;

    if (theImg) {
        theImg = 'img/throws/' + theImg;
    }

    if (!theModal) {
        anOverlay = aDiv.cloneNode();
        anOverlay.id = overlayId;
        anOverlay.setAttribute('data-method', 'toggleModal');

        aWrapper = aDiv.cloneNode();
        aWrapper.className = 'wrapper';

        addDiv = aDiv.cloneNode();
        addDiv.setAttribute('data-method', 'toggleModal');
        addDiv.style.top = modalTop + 'px';

        aSpan = doc.createElement('span');
        aSpan.className = 'close';
        aSpan.setAttribute('title', closeTitle);
        aSpan.textContent = closeText;
        aSpan.setAttribute('data-method', 'toggleModal');
        aWrapper.appendChild(aSpan);

        aHeader = doc.createElement('h4');
        aHeader.textContent = theHandle.textContent;
        aWrapper.appendChild(aHeader);

        anImg = doc.createElement('img');
        anImg.className = 'diagram';
        if (theImg) {
            anImg.src = theImg;
        }
        aWrapper.appendChild(anImg);

        anIframe = doc.createElement('iframe');
        anIframe.src = theVid;
        anIframe.setAttribute('frameborder', '0');
        anIframe.setAttribute('allowfullscreen', '');
        aWrapper.appendChild(anIframe);

        addDiv.appendChild(aWrapper);
        addDiv.id = mediaModal;
        theBody.appendChild(addDiv);
        theBody.appendChild(anOverlay);
    } else {
        aFrag = doc.createDocumentFragment();
        aFrag.appendChild(theModal);

        aWrapper = theModal.querySelector('.wrapper');

        aHeader = theModal.querySelector('h4');
        aHeader.textContent = theHandle.textContent;

        anImg = theModal.querySelector('.diagram');
        if (theImg) {
            anImg.src = theImg;
        } else {
            anImg.src = '';
        }

        anIframe = theModal.querySelector('iframe');
        anIframe.src = theVid;

        theModal.className = 'show';
        theModal.style.top = modalTop + 'px';

        theBody.appendChild(aFrag);
        anOverlay.className = 'show';

    }
};