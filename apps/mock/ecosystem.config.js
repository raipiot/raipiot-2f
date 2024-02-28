module.exports = {
  apps: [
    {
      name: 'raipiot-2f-mock',
      script: './dist/main.js',
      max_memory_restart: '1452M',
      exec_mode: 'cluster',
      instances: 1,
      exp_backoff_restart_delay: 100,
      min_uptime: '5m',
      max_restarts: 5
    }
  ]
}
