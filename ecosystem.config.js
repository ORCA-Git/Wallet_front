module.exports = {
  apps: [
    {
      name: 'Wallet',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        "PORT": 80,
        "NODE_ENV": "production"
      },
    }
  ]
}
