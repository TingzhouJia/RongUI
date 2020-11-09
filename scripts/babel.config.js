module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          modules: false,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
        "@babel/proposal-class-properties",
        "babel-plugin-styled-components",
      ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
      ['@babel/plugin-transform-runtime', { useESModules: true }],
    ],
    ignore: [/@babel[\\|/]runtime/],
  }