({
    baseUrl: '../../../js',
    paths: {
        'requireLib': 'lib/require',
        'domReady': 'lib/require/domReady'
    },
    name: 'main-src',
    include: 'requireLib',
    exclude: [
        'lib/modernizr'
    ],
    out: '../../main.js'
})