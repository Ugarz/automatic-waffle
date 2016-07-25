module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + '/src/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
