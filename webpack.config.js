const path = require("path");

const { NODE_ENV = "production" } = process.env;

module.exports = () => ({
  entry: path.resolve(__dirname, "src/index.ts"),
  mode: NODE_ENV,
  watch: true,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
});
