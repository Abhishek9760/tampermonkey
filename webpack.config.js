const path = require('path');

module.exports = {
    entry: './src/index.js', // React entry file
    output: {
        filename: 'tampermonkey-react-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production', // for minification
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
};
