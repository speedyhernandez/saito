/*globals require, define, win, lib*/
require(['app/globals']);

define(function () {
    'use strict';
/*
    mediaHandles - appends data-method='modal' to all the modal video
    media links
    scroller - used for scrolling the page
    modal - the modal window which is currently only used for the
    video links
    closeModal - this closes the modal window
*/
    return {
        mediaHandles: function () {
            var theContent = win.doc.getElementById('content'),
                i = 0,
                mediaHandles = theContent.querySelectorAll('#throws div a, #kata div a'),
                len = mediaHandles.length;

            while (i < len) {
                mediaHandles[i].setAttribute('data-method', 'modal');
                i += 1;
            }
        },
        scroller: function (e) {
            e.preventDefault();

            var theHref = e.target.getAttribute('href'),
                targetEle = win.doc.querySelector(theHref),
                targetOffset = targetEle.offsetTop,
                baseOffset = win.scrollBaseElement.scrollTop,
                duration = 4000,
                difference = targetOffset - baseOffset,
                perTick,
                scrollToVar,
                obj = this;

            if (theHref === '#top') {
                win.scrollBaseElement.scrollTop = 0;
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

            scrollToVar = win.scrollBaseElement.scrollTop + perTick;

            if (scrollToVar >= targetOffset) {
                scrollToVar = targetOffset;
            }

            setTimeout(function () {
                var durationVar = duration - 10;

                win.scrollBaseElement.scrollTop = scrollToVar;
                obj.scroller(e);
            }, 10);
        },
        modal: function (e) {
            var theHandle = e.target,
                closeText = '\u00D7',
                closeTitle = 'close',
                theImg = theHandle.getAttribute('data-img'),
                theVid = theHandle.getAttribute('data-vid'),
                videoPath = '//www.youtube.com/embed/',
                videoRel = '?rel=0',
                mediaModal = 'media-modal',
                modalTop = e.pageY,
                theModal = win.doc.getElementById(mediaModal),
                aFrag,
                aDiv = win.doc.createElement('div'),
                addDiv,
                overlayId = 'overlay',
                anOverlay = win.doc.getElementById(overlayId),
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
                anOverlay.setAttribute('data-method', 'closeModal');

                aWrapper = aDiv.cloneNode();
                aWrapper.className = 'wrapper';

                addDiv = aDiv.cloneNode();
                addDiv.setAttribute('data-method', 'closeModal');
                addDiv.style.top = modalTop + 'px';

                aSpan = win.doc.createElement('span');
                aSpan.className = 'close';
                aSpan.setAttribute('title', closeTitle);
                aSpan.textContent = closeText;
                aSpan.setAttribute('data-method', 'closeModal');
                aWrapper.appendChild(aSpan);

                aHeader = win.doc.createElement('h4');
                aHeader.textContent = theHandle.textContent;
                aWrapper.appendChild(aHeader);

                anImg = win.doc.createElement('img');
                anImg.className = 'diagram';
                if (theImg) {
                    anImg.src = theImg;
                }
                aWrapper.appendChild(anImg);

                anIframe = win.doc.createElement('iframe');
                anIframe.src = theVid;
                anIframe.setAttribute('frameborder', '0');
                anIframe.setAttribute('allowfullscreen', '');
                aWrapper.appendChild(anIframe);

                addDiv.appendChild(aWrapper);
                addDiv.id = mediaModal;
                win.body.appendChild(addDiv);
                win.body.appendChild(anOverlay);
            } else {
                aFrag = win.doc.createDocumentFragment();
                aFrag.appendChild(theModal);

                aWrapper = theModal.querySelector('.wrapper');

                aHeader = theModal.querySelector('h4');
                aHeader.textContent = theHandle.textContent;

                anImg = theModal.querySelector('.diagram');
                if (theImg) {
                    anImg.src = theImg;
                    anImg.removeAttribute('style');
                } else {
                    anImg.src = '';
                    anImg.style.display = 'none';
                }

                anIframe = theModal.querySelector('iframe');
                anIframe.src = theVid;

                theModal.className = 'show';
                theModal.style.top = modalTop + 'px';

                win.body.appendChild(aFrag);
                anOverlay.className = 'show';

            }
        },
        closeModal: function () {
            var theModal = win.doc.getElementById('media-modal'),
                theOverlay = win.doc.getElementById('overlay');

            if (!theModal.className || theModal.className === 'show') {
                theModal.className = 'hide';
                theOverlay.className = 'hide';

                theModal.querySelector('iframe').setAttribute('src', '');
            } else {
                theModal.className = 'show';
                theOverlay.className = 'show';
            }
        }
    };
});