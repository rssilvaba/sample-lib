const path = require("path");
module.exports = {
  // mode: "development || "production",
  entry: {
    main: './main.js',
    add: "./add",
    subtract: "./subtract",
    others: "./others"
  },
  output: {
    clean: true,
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    library: ["MyLibrary", "[name]"],
    libraryTarget: "umd"
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3004,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }

  },
};
