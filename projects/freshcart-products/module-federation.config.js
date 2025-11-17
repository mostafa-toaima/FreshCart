const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'freshcartProducts',
  filename: 'remoteEntry.js',

  exposes: {
    './Products': './projects/freshcart-products/src/app/products/products.component.ts'
  }

,

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
