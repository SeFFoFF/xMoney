/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      margin: {
        '16px': '16px'
      },
      padding: {
        '24px': '24px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        app: '#F3F6FBFF',
        card: '#FFFFFF'
      },
      width: {
        'month-card': '250px'
      },
      height: {
        'month-card': '125px',
        header: '100px',
        '500px': '500px'
      },
      minHeight: {
        '360px': '360px'
      },
      spacing: {
        '10px': '10px',
        '16px': '16px',
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',
        '100px': '100px',
        '150px': '150px',
        '160px': '160px',
        '200px': '200px',
        '270px': '270px',
        '640px': '640px',
        '1240px': '1240px'
      },
      flex: {
        205: '1 0 205px'
      }
    }
  },
  plugins: []
}
