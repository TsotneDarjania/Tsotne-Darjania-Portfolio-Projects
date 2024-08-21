import path, { resolve } from "path";

export default {
  entry: "./public/index.tsx", // Your entry point file
  output: {
    filename: "bundle.js", // The output file name
    path: path.resolve("public"), // Output directory set to your existing 'public' folder
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // File extensions to support
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/, // Test for .ts and .tsx files
        use: "babel-loader", // Use Babel to handle TypeScript and JSX
        exclude: /node_modules/, // Exclude the node_modules folder
      },
    ],
  },
  mode: "production", // Can be 'development' or 'production'
};
