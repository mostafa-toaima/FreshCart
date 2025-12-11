const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'cart',

  exposes: {
    './Component': './projects/cart/src/app/cart-main.component.ts',
    './cart-routes': './projects/cart/src/app/cart.routes.ts',
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
