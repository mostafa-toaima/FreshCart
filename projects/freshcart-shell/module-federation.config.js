const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    // name here = the remoteName you will import in host routes
    "freshcartProducts": "http://localhost:4201/remoteEntry.js",
    "freshcartCart": "http://localhost:4203/remoteEntry.js",
    "freshcartAuth": "http://localhost:4202/remoteEntry.js",
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
