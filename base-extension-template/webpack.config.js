const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/public/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src/public'),
    publicPath: '/',
    compress: true,
    hot: true,
    inline: true,
    port: 9000
  }
};