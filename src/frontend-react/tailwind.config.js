import withMT from '@material-tailwind/react/utils/withMT'

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#25386A',
        secondary: '#A6C8FF',
        'primary-light': '#0F62FE',
        whiteBall: '#4589FF',
      },
    },
  },
  plugins: [],
})


