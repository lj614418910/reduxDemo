var path = require('path')

module.exports = {
    entry: {
        demo: [path.join(__dirname,'/src/app.js')]
    },
    output: {
        path: __dirname+'/asserts',
        publicPath: '/asserts/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}