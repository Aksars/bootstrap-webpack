// 'use strict'

// const path = require('path')
// const autoprefixer = require('autoprefixer')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   mode: 'development',
//   entry: './src/js/main.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   devServer: {
//     static: path.resolve(__dirname, 'dist'),
//     port: 8080,
//     hot: true, 
//     watchFiles: ["src/*.html"],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: './src/index.html' })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(scss)$/,
//         use: [
//           {
//             // Adds CSS to the DOM by injecting a `<style>` tag
//             loader: 'style-loader'
//           },
//           {
//             // Interprets `@import` and `url()` like `import/require()` and will resolve them
//             loader: 'css-loader'
//           },
//           {
//             // Loader for webpack to process CSS with PostCSS
//             loader: 'postcss-loader',
//             options: {
//               postcssOptions: {
//                 plugins: [
//                   autoprefixer
//                 ]
//               }
//             }
//           },
//           {
//             // Loads a SASS/SCSS file and compiles it to CSS
//             loader: 'sass-loader'
//           }
//         ]
//       }
//     ]
//   }
// }

const path = require('path')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        __dirname + '/src/js/main.js',
        __dirname + '/src/scss/styles.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'sass-loader'
                ],
                type: 'asset/resource',
                generator: {
                    filename: 'css/[name].min.css'
                },
            }
        ]
    },
    plugins: [
        new RemoveEmptyScriptsPlugin(),  
        new HtmlWebpackPlugin({ template: './src/index.html' })      
    ],
};