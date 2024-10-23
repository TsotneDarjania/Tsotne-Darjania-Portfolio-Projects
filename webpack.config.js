import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    meetZone: "./public/meetZone/index.tsx",
    portfolio: "./public/portfolio/index.tsx",
    plinkoGame: "./public/plinkoGame/index.ts",
  },

  output: {
    filename: "[name]Bundle.js", // Generates meetZoneBundle.js and portfolioBundle.js
    path: path.resolve(__dirname, "public/build"), // Outputs to respective folders
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // File extensions to support
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/, // Test for .ts and .tsx files
        use: "babel-loader", // Use Babel to handle TypeScript and JSX
        exclude: /node_modules/, // Exclude the node_modules folder
      },
      {
        test: /\.(png|jpe?g|svg)$/i, // Test for .png, .jpg, .jpeg, and .svg files
        type: "asset/resource", // Handle images as resources
        generator: {
          filename: "static/assets/img/[name][ext]", // Output images to 'static' folder with original names
        },
      },
    ],
  },
  mode: "production", // Can be 'development' or 'production'
};
