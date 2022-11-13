const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: './src/script/index.js',
    todo_tasks: './src/script/todo_tasks.js',
    form: './src/script/form.js',
    nav: './src/script/nav.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Output Management',
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
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
  },
};