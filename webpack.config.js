const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "",
    filename: "main.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 1233,
    overlay: true, //for errors
    writeToDisk: true,

  },

  module: {
    rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        }

      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: "images",

          }
        }]
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "product.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/product.html",
    }),
    new HtmlWebpackPlugin({
      filename: "checkout.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/checkout.html",
    }),
    new HtmlWebpackPlugin({
      filename: "payment.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/payment.html",
    }),
    new HtmlWebpackPlugin({
      filename: "search.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/search.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/contact.html",
    }),


    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
};