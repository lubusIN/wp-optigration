module.exports = {
  theme: {
    extend: {}
  },
  variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'odd'],
	},
  plugins: [
		require('@tailwindcss/custom-forms')
	]
}
