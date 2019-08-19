module.exports = {
  entry: './client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(png|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      'node_modules'
    ]
  },
  output: {
    path: __dirname + '/client/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client/dist'
  }
};