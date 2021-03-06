const path = require('path');

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname,"./client/dist"),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      }
     
    ]
  },
  devServer:{
    publicPath: '/dist/',
    proxy: {
      '/' : 'http://localhost:3000'
    }
  },
  mode: process.NODE_ENV,
}