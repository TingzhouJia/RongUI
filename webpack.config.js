const path = require("path");

module.exports = {
  entry: "./components/index.tsx",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    libraryTarget: "commonjs2",
    library: ""
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "components"),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, "components"),
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
    "styled-components": "commonjs styled-components"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
};