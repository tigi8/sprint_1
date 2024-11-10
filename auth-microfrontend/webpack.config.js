const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Точка входа для микрофронтенда
  mode: "development",
  devServer: {
    port: 3001, // Задаем уникальный порт для auth-microfrontend
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    clean: true,
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
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "authMicrofrontend", // Уникальное имя для аутентификационного микрофронтенда
      filename: "remoteEntry.js",
      exposes: {
        "./Login": "./src/components/Login", // Экспорт компонента для входа
        "./Register": "./src/components/Register", // Экспорт компонента для регистрации
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^17.0.2",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^17.0.2",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
