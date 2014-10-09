{
    appDir: '../site',
    baseUrl: 'js/lib',
    optimize: 'uglify2',
    paths: {
        app: '../app',
        domReady: 'require/domReady',
        modernizr: 'modernizr-2.8.3.min'
    },
    dir: '../build',
    modules: [
        {
            name: '../main',
            include: [
                'modernizr',
                'domReady',
                'app/lib'
            ]
        }
    ]
}