const path = require("path");
const fs=require('fs-extra')
const componentsPath = path.join(__dirname, "../components");
module.exports = async () => {
  const files = await fs.readdir(componentsPath);

  const components = await Promise.all(
    files.map(async (name) => {
      const comPath = path.join(componentsPath, name);
      const entry = path.join(comPath, "index.tsx");

      const stat = await fs.stat(comPath);
      if (!stat.isDirectory()) return null;

      const hasFile = await fs.pathExists(entry);
      if (!hasFile) return null;

      return { name, url: entry };
    })
  );

  const componentsEntries = components
    .filter((r) => r)
    .reduce((pre, current) => {
      return Object.assign({}, pre, { [current.name]: current.url });
    }, {});
    console.log(`\n${Object.keys(componentsEntries).length} Components in total have been collected.`)
    console.log('Bundle now...')
  const configs = {
    entry: componentsEntries,
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../dist"),
      libraryTarget: "commonjs",
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        components: componentsPath,
      },
    },
    mode: "none",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins:["babel-plugin-styled-components","@babel/proposal-class-properties"]
          },
        },
      ],
    },
    externals: {
      react: "commonjs react",
      "@ant-design/icons":"@ant-design/icons",
      "react-dom": "commonjs react-dom",
      "styled-components": {
        commonjs: "styled-components",
        commonjs2: "styled-components",
        amd: "styled-components",
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
  };
  return [
    configs,
    {
      ...configs,

      entry: {
        index: path.join(componentsPath, 'index.ts'),
      },
    },
    {
      ...configs,

      mode: 'production',

      entry: {
        'index.min': path.join(componentsPath, 'index.ts'),
      },

      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        library: "Rong",
        libraryTarget: 'umd',
        globalObject: 'this',
      },
    },
  ]
};
