/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'theme': "#d3c1b1",
        'footer': '#212529',
        'primary': {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
        },
      },
      backgroundImage: {
        'main-banner': "url('/src/assets/img/3.jpg')",
      },
      spacing: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        20: '20rem',
      },
      fontSize: {
        10: '10px',
        12: '12px',
        13: '13px',
      },
    },
    fontFamily: {
      'body': [
        'Inter', 'ui-sans-serif', 'system-ui', '-apple-system',
        'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue',
        'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
      ],
      'sans': [
        'Inter', 'ui-sans-serif', 'system-ui', '-apple-system',
        'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue',
        'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
      ],
    },
  },
  plugins: [],
}
