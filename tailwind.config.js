/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		screens: {
			"tablet": {'max': '768px'},
			"mobile": {'max': '530px'}
		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

