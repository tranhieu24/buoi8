module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chefify: {
          pink: '#F0326A',
          amber: '#FFC107',
          dark: '#1A1A2E'
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
