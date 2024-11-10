const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", // точка входа для микрофронтенда
  mode: "development",
  devServer: {
    port: 3002, // Порт для profile-microfrontend
  },
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profileMicrofrontend", // имя микрофронтенда
      filename: "remoteEntry.js", // имя файла экспорта для использования в других приложениях
      exposes: {
        "./Profile": "./src/components/Profile", // путь к основному компоненту микрофронтенда
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: "^17.0.2",
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^17.0.2",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

