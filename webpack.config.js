const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './netlify/functions/send-email.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'netlify/functions-build'),
    filename: 'send-email.js',
    libraryTarget: 'commonjs2', 
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
