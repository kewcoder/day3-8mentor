module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      theme: {
          fontFamily: {
            'sans': ['-apple-system', 'BlinkMacSystemFont']
          }
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gradient: 'var(--gradient)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
