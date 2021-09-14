const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // devServer: {
    //     contentBase: './public',
    // },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
