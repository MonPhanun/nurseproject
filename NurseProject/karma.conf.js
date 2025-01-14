module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/app/**/*.ts',
            'src/app/**/*.spec.ts',
            'src/**/**/*.ts',
            'src/**/**/*.spec.ts'
        ],
        preprocessors: {
            '**/*.ts': ['webpack', 'sourcemap']
        },
        webpack: {
            module: {
                rules: require('./webpack.config.js').module.rules
            }
        },
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-sourcemap-loader'
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome']
    });
};