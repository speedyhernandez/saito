// Used throughout the app
var win = window;

win.doc = document;
win.body = win.doc.body;

if (win.mozInnerScreenX || win.doc.documentMode) {
    // IE or FF
    win.scrollBaseElement = win.doc.getElementsByTagName('html')[0];
} else {
    win.scrollBaseElement = win.body;
}