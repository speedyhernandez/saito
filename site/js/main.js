/*globals requirejs, require*/
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        domReady: 'require/domReady'
    }
});

require(['app/init']);