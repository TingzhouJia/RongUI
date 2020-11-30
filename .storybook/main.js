module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',

    {
      name: '@storybook/addon-docs',
      options: {
         configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      },
    },
 ],

  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      
    },
  },
};