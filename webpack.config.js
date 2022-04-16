const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "https": require.resolve("https-browserify"),
      "stream-http": false,
      "url": false,
      "http": false,
      "crypto": false,
      "querystring": false
    }
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};