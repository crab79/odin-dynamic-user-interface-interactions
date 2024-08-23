const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {

        app: './src/index.js',
        form: './src/validation.js',
    },

    plugins: [

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks:['app']

        }),
        new HtmlWebpackPlugin({
            filename: 'form.html',
            template: 'src/form.html',
            chunks:['form']
        }),
    ],

    output: {

        filename: '[name].bundle.js',

        path: path.resolve(__dirname, 'dist'),

        clean: true,

    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
        ],
    },
};