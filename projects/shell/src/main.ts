import { initFederation } from '@angular-architects/native-federation';

initFederation({
  products: 'http://localhost:4201/remoteEntry.json',
  cart: 'http://localhost:4202/remoteEntry.json',
  auth: 'http://localhost:4203/remoteEntry.json'
})
  .then(() => {
    return import('./bootstrap');
  })
  .catch(err => {
    throw err;
  });
