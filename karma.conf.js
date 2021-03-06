// Karma configuration
// Generated on Thu Apr 06 2017 14:51:48 GMT-0700 (PDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'browserify'],


        // list of files / patterns to load in the browser
        files: [
            'src/test/js/entrypoint.js',
            'src/test/js/**/*-spec.{js,jsx}'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/test/js/entrypoint.js' : ['browserify'],
            'src/test/js/**/*-spec.+(js|jsx)': ['browserify']
        },

        browserify: {
            debug: true,
            transform: ['babelify'],
            extensions: ['.js', '.jsx'],
            // needed for enzyme
            // configure: function (bundle) {
            //     bundle.on('prebundle', function () {
            //         bundle.external('react/addons');
            //         // bundle.external('react/lib/ReactContext');
            //         // bundle.external('react/lib/ExecutionEnvironment');
            //     });
            // }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'junit'],

        junitReporter: {
            outputDir: 'target/react-test-reports'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
