module.exports = {
	entry : "./src/index.js",
	output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }, module: {
    loaders: [
      {
        test: /\.js?$/,
        include: /src/,
        loader: "babel-loader" ,
        query: {
          presets: ["react", "es2015"]
          
        }
      }
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};