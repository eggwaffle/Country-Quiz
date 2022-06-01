module.exports = {
  mode: 'jit',
  HTMLFormControlsCollection: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'krona-one': ['"Krona One"', 'sans-serif'],
      'montserrat' : ['Montserrat', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'raleway' : ['Raleway', 'sans-serif'],
      'tutorial': ['-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto','Oxygen','Ubuntu','Cantarell',
        '"Fira Sans"','"Droid Sans"','"Helvetica Neue"','sans-serif'],
      'ubuntu-mono': ['"Ubuntu Mono"', 'monospace']
    },
    extend: {
      colors: {
        '0070f3': '#0070f3',
        '1D355D': '#1D355D',
        '1e293b': '#1e293b',
        '2F527B': '#2F527B',
        '2F80ED': '#2F80ED',
        '333333': '#333333',
        '4F4F4F': '#4F4F4F',
        '555555': '#555555',
        '6066D0B2': '#6066D0B2',
        '60BF88': '#60BF88',
        'EA8282': '#EA8282',
        'F0402C': '#F0402C',
        'F7DF94': '#F7DF94',
        'F8FAFC': '#F8FAFC',
        'F9A826': '#F9A826',
        '828282': '#828282',
        'A9A9A9': '#A9A9A9',
        'BDBDBD': '#BDBDBD',
        'C4C4C4': '#C4C4C4',
        'F2F2F2': '#F2F2F2',
        'EB5757': '#EB5757',
      },
    }
  },
  plugins: [],
}
