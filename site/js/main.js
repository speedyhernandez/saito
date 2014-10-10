/*globals requirejs, require*/
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        modernizr: 'modernizr-2.8.3.min',
        app: '../app',
        domReady: 'require/domReady'
    }
});

require(
    [
        'modernizr',
        'app/init',
        'domReady!'
    ]
);