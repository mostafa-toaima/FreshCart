import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .then(() => {
    return import('./bootstrap');
  })
  .catch(err => {
  });
