/** @type {import('tailwindcss').Config} */
export default {
  // eslint-disable-next-line global-require
  presets: [require('@raipiot-infra/tailwind')],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
}
