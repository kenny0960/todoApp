var path = require('path');

const paths = {
    JS: path.resolve(__dirname, 'src/js'),
    DIST: path.resolve(__dirname, 'public/js'),
};

module.exports = {
    entry: path.join(paths.JS, 'todoApp.js'),
    output: {
        path: paths.DIST,
        filename: 'todoApp.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
};