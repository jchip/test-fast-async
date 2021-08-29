module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        use: [{ loader: "babel-loader" }]
      }
    ]
  }
};
