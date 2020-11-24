const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

/* const dotenv = require("dotenv-webpack"); */

module.exports = {
  entry: "./src/index.js",
  /* output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  }, */
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },

  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].scss",
    }),
    new WebpackPwaManifestPlugin({
      //Le pasamos el objeto de configuracion
      name: "AlbunApp ",
      shortname: "AlbunApp",
      description: "AlbunApp Guardara los mejores recuerdos de tu BeBé.",
      background_color: "#4D685A",
      theme_color: "#0D5C63",
      //Array iconos de la aplicacion
      icons: [
        {
          src: path.resolve("src/assets/favicon.png"),
          //Le pasamos todos los tamaños que requerimos
          sizes: [192, 512],
        },
      ],
    }),
    new FaviconsWebpackPlugin("./src/assets/favicon.png"),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://maps.arcgis.com/sharing/rest/content/items/3ddd6c4932d649d6996db442e920ceb9/data|res.cloudinary.com"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          // Cache para la API
          urlPattern: new RegExp(
            "https://api-covi-19.jorgevelasquez006.now.sh/API/covi19.json|https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief|https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=CO"
          ),
          // Le decimos que primero valla a la red antes de ir a la cache
          // para tener los datos actulizados
          handler: "NetworkFirst",
          //Le pasamos el nombre de la cache api
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
};
