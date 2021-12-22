module.exports = {
    productionSourceMap: false,
    transpileDependencies: ['vuetify'], pwa: {
        workboxOptions: {
            exclude: ['_redirects']
        }
    }
}
