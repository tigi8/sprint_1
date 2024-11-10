const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Точка входа для gallery-microfrontend
  mode: "development",
  devServer: {
    port: 3003, // Уникальный порт для gallery-microfrontend
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
      name: "galleryMicrofrontend", // Уникальное имя для галереи
      filename: "remoteEntry.js",
      exposes: {
        "./Gallery": "./src/components/Gallery", // Экспорт основного компонента галереи
        "./ImageUpload": "./src/components/ImageUpload", // Экспорт компонента для загрузки изображений
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
