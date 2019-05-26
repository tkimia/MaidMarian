var path = require('path');

module.exports = {
    entry: './src/main/webapp/index.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: path.join(__dirname),
        filename: './src/main/resources/static/built/bundle.js'
    },
    devServer: {
        contentBase: './src/main/resources/static/built'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};