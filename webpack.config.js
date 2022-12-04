const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: './src/script/index.js',
    todo_tasks: './src/script/todo_tasks.js',
    taskmodal: './src/script/taskmodal.js',
    form: './src/script/form.js',
    nav: './src/script/nav.js',
    mainContent: './src/script/mainContent.js',
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
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
    ],
  },
};