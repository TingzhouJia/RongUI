const outputModule = process.env.OUTPUT_MODULE;
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: outputModule || false
      },
      {
        "corejs": "3",
        "useBuiltIns": "usage"
      }
    ],
    "@babel/preset-react",
    '@babel/typescript',
  ],
  plugins: [
    ["@babel/plugin-transform-runtime",{useESModules: true,}],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-modules-commonjs"
  ].filter(Boolean)
};