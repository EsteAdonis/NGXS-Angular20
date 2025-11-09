/** @type {import('tailwindcss').Config} */
module.export = {
	content: [
		"./src/**/*.(html, ts)",
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {}
	},
	plugins: [
		required('flowbite/plugin') //add this line
	]
}