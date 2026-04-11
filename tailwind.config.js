/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#D13426',
        'primary-dark': '#A8281D',
        ink: '#1A1A1A',
        dark: '#111111',
        muted: '#6B7280',
        border: '#E5E7EB',
        surface: '#F7F7F7',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
