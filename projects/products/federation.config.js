const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'products',  // Critical: must match shell's reference

  exposes: {
    './Component': './projects/products/src/app/products-main.component.ts',
    './products-routes': './projects/products/src/app/products.routes.ts',
    './categories-routes': './projects/products/src/app/categories.routes.ts'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'swiper/react',
    'swiper/vue',
  ]
});
