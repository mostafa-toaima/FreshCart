const { spawn } = require('child_process');

const apps = [
  { name: 'shell', port: 4200 },
  { name: 'products', port: 4201 },
  { name: 'cart', port: 4202 },
  { name: 'auth', port: 4203 }
];

apps.forEach(app => {
  const child = spawn('ng', ['serve', app.name, '--port', app.port], {
    shell: true,
    stdio: 'inherit'
  });

  child.on('error', (error) => {
    console.error(`Error starting ${app.name}:`, error);
  });
});

console.log('Starting all micro frontends...');
