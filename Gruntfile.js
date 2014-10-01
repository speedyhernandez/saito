/*globals module*/
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'js',
                    paths: {
                        'requireLib': 'lib/require',
                        'domReady': 'lib/require/domReady'
                    },
                    name: 'main-src',
                    include: 'requireLib',
                    exclude: [
                        'lib/modernizr'
                    ],
                    out: 'js/main.js'
                }
            }
        },

        jshint: {
            options: {
                browser: true,
                globals: {
                    define: true,
                    win: true,
                    doc: true,
                    theBody: true,
                    Modernizr: true
                }
            },
            files: ['js/app/*.js',
                    'js/main.js']
        },

        stylus: {
            compile: {
                files: {
                    'css/style.css': 'stylus/style.styl'
                }
            }
        },

        copy: {
            build: {
                expand: true,
                cwd: '../saito/',
                src: ['img/**',
                      'css/*',
                      'js/main.js',
                      'js/lib/modernizr.js',
                      '.htaccess',
                      '*.html',
                      'robots.txt',
                      'sitemap.xml'],
                dest: 'build/'
            }
        },

        clean: {
            build: {
                src: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', 'jshint');
    grunt.registerTask('build', ['stylus', 'requirejs', 'clean', 'copy']);
};