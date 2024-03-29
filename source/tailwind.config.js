/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'blueNormal': '#0099a3',
        'bluePressed': '#00777f',
        'YellowButton': '#ffaf00',
        'YellowButtonP': '#ffcd00',
        'OrangeNavBar' : '#ffaf00',
        grayish: '#807D7A',
        grayish_hoover: '#E4D080',
      },
      boxShadow: {
        'shadow-inner': '0px 0px 46px 0px rgba(0,0,0,0.70) inset',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

