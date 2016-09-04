module.exports = {
  entry: './source/app',
  output: {
    path: './distribution/',
    filename: "app.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  target: 'electron',
  eslint: {
    configFile: './.eslintrc.json'
  },
  resolve: {
    extensions: ['', '.js', '.scss']
  }
};
