import { initFederation } from '@angular-architects/native-federation';

initFederation({
  // products: 'http://localhost:4201/remoteEntry.json',
  // cart: 'http://localhost:4202/remoteEntry.json',
  // auth: 'http://localhost:4203/remoteEntry.json'
  products: 'https://mostafa-ibrahim.github.io/javazon/products/remoteEntry.json',
  cart: 'https://mostafa-ibrahim.github.io/javazon/cart/remoteEntry.json',
  auth: 'https://mostafa-ibrahim.github.io/javazon/auth/remoteEntry.json',
})
  .then(() => {
    return import('./bootstrap');
  })
  .catch(err => {
    throw err;
  });
