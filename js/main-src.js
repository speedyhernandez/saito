/*global define, console, requirejs, require, hrLogo, Modernizr*/
requirejs.config({
    baseUrl: 'js',
    paths: {
        'requireLib': 'lib/require',
        'domReady': 'lib/require/domReady'
    }
});

define('modernizr', [], Modernizr);

require(
    [
        'domReady!',
        'app/globals',
        'app/hrLogo',
        'app/mediaHandles',
        'app/scroller',
        'app/modal',
        'app/toggleModal',
        'app/primeEventListener',
        'modernizr'
    ]
);