
module.exports = {

  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    './dist/*.html'
  ],
  theme: {

    
    extend: {
      'animation': {
        'text':'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'button-purple': "#8b46ff",
        'dark-purple': "#0f172a",
        'input-purple': "#1d2537",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],

}