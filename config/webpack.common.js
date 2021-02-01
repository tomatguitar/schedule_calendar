const paths = require('./paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // Where webpack looks to start building the bundle
  // Откуда начинается сборка
  entry: [paths.src + '/js/index.js'],

  // Where webpack outputs the assets and bundles
  // Куда помещаются файлы сборки
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: './',
  },

  // Customize the webpack build process
  // Настройки
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    // Удаление/очистка директории для файлов сборки и неиспользуемых ресурсов при повтроном сборке
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    // Копирование статических файлов
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Checks formatting of js files
    // Проверка форматирования файлов стилей
    new ESLintPlugin({
      fix: true,
    }),

    // Checks formatting of scss/sass files
    // Проверка форматирования файлов стилей
    new StylelintPlugin({
      fix: true,
    }),

    // Generates an HTML file from a template
    // Создание HTML-файла на основе шаблона
    new HtmlWebpackPlugin({
      title: 'SpaceAttack!(rs clone)',
      favicon: paths.src + '/assets/images/favicon.svg',
      // template file
      // шаблон
      template: paths.src + '/template.html',
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  // Настройка модулей
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      // JavaScript: использовать Babel для транспиляции
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      // Styles: Inject CSS into the head with source maps
      // Стили: встроить CSS в head с картами источников
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          {
            loader: 'resolve-url-loader',
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      // Images: Copy image files to build folder
      // Изображения: копировать файлы в директорию для файлов сборки
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      // Шрифты и SVG
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      {
        test: /\.(wav|mp3|ogg)$/,
        use: [
          {
            loader: 'file-loader',
            // include: paths.src
          },
        ],
      },
    ],
  },
};