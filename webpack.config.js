// Requerimos el modulo de path el Html plugin que isntalamos
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const dotenv = require("dotenv-webpack");

const pluginHTML = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "index.html",
});

const pluginCSS = new MiniCssExtractPlugin({
  template: "./src/index.css",
  filename: "index.css",
});

// Creamos un nuevo modulo que vamos a exportar con esta configuracion
// Vamos a configurar cada unos de los elementos que necesitamos

module.exports = {
  // Iniciando por la entrada del proyecto
  // Haciendo referencia al archivo principal
  entry: "./src/index.js",
  // En este output, es donde vamos a guardar los archivos resultantes cuando hagamos la configuracion
  output: {
    // La instancia resolve nos ayuda a detectar el directorio donde nos encontramos y el directorio donde vamos a guardar los archivos compilados
    path: path.resolve(__dirname, "dist"),
    // Filename nos pode un nombre al archivo compilado
    filename: "bundle.js",
    // Le decimos al proyecto que parta desde esta ruta para encontrar los elementos
    publicPath: "/",
  },
  // Este elemento resuelve las extensiones que vamos a utilizar
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // Modulo con las reglas necesarias
  module: {
    rules: [
      {
        // Regla principal
        // Identificacion de los archivos con una expresion regular
        test: /\.(js|jsx)$/,
        // Exclusion de carpetas
        exclude: /node_modules/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Regla para trabajar con los archivos html
        test: /\.html$/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ico|png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/[hash].[ext]" },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },

  // Se añaden los plugins que necesitamos
  plugins: [
    // pasamo un objeto con la configuracion que necesitamos

    new HtmlWebpackPlugin({
      //Donde esta ubicado el template que tenemos
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    new WebpackPwaManifestPlugin({
      //Le pasamos el objeto de configuracion
      name: "AlbunApp ",
      shortname: "Matias",
      description: "AlbunApp Guardara los mejores recuerdos de tu BeBé.",
      background_color: "#41dfff",
      theme_color: "#9EE9F8",
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
    new dotenv(),
  ],
  /*  plugins: [pluginHTML, pluginCSS, new dotenv()], */
  /*  plugins: [new dotenv()], */
  /*  devtool: "source-map", */
};
