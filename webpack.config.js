const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Constant with your paths
const paths = {
// Put your structure paths here
DIST: path.resolve(__dirname, 'dist'),
SRC: path.resolve(__dirname, 'src'),
JS: path.resolve(__dirname, 'src/js'),
PUBLIC: path.resolve(__dirname, 'public'),
};
// Webpack configuration
module.exports = {
 entry: path.resolve(__dirname, 'src/index.js'),
 mode: 'development',
 output: {
 path: paths.DIST,
 filename: 'app.bundle.js',
},
// Tell webpack to use html plugin
plugins: [

 new HtmlWebpackPlugin({
  template: path.join(paths.PUBLIC, 'index.html'),
 }),

 new ExtractTextPlugin('style.bundle.css'),
],
// Loaders configuration
// We are telling webpack to use ‘babel-loader’ for .js and .jsx // files
module: {
 rules: [
  {
   test: /\.(js|jsx)$/,
   exclude: /node_modules/,
   use: ['babel-loader'],
  },{
   test: /\.css$/,
   loader: ExtractTextPlugin.extract({
    use: 'css-loader',
   }),
  },{
   test: /\.scss$/,
   loader: ExtractTextPlugin.extract({
    use: ['css-loader', 'sass-loader'],
   }),
  },{
   test: /\.(png|jpg|gif)$/,
   use: ['file-loader'],
  },
],
},
resolve: {
 extensions: ['.js', '.jsx'],
},
};
