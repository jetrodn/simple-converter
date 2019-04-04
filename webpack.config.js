var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableSassLoader()
    .enableVueLoader()
    .addEntry('js/app', './assets/js/app.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .addStyleEntry('css/app', ['./assets/scss/app.scss'])
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
;

module.exports = Encore.getWebpackConfig();
