const path = require("path");
const srcRoot = path.resolve(__dirname, "../components");

module.exports = {
  mode: "development",
  
  entry: {
    path: path.resolve(__dirname, "../src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "../src/"),
    publicPath: '../src',
    filename: "bundle.js"
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devServer: {
    contentBase: path.join(__dirname, "../src"),
    compress: true,
    writeToDisk: true,
    port: 3001, // 启动端口为 3001 的服务
    open: true // 自动打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
  
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          "cache-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
       
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "url-loader?limit=8192",
        include: srcRoot
      }
    ]
  }
};
