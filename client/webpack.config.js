const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // The mode can be set to 'development' or 'production'
  mode: 'production', // or 'production'

  // Entry point of your application
  entry: './src/main.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
    publicPath: '/', // Base path for all assets
  },

  // Module configuration
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile ES6+ and JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use these presets
          },
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Use these loaders
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Match image files
        use: [
          {
            loader: 'file-loader', // Handle images
            options: {
              name: '[path][name].[ext]', // Keep original file name and path
            },
          },
        ],
      },
    ],
  },

  // Resolve extensions to make imports cleaner
  resolve: {
    extensions: ['.js', '.jsx'], // File types to resolve
  },

  // DevServer configuration
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve from the dist folder
    compress: true,
    port: 3000, // Port to run the server
    historyApiFallback: true, // Support for React Router
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML file
      filename: 'index.html', // Output HTML file
    }),
  ],
};
