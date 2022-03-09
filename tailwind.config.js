module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
      colors: {
        'raisin-black': '#332E3C',
        rhythm: '#877D9B',
        independence: '#1D1A22',
        'old-lavender': '#69607D',
      },
    },
  },
  plugins: [],
};
