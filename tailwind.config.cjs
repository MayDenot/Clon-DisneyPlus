/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				"content": "linear-gradient(180deg, rgba(45,47,59,1) 0%, rgba(31,32,43,1) 81%)",
				"header": "linear-gradient(180deg, rgba(0,0,0,1) 11%, rgba(31,32,43,0) 100%)",
			},
			boxShadow: {
				"cards": "rgba(0, 0, 0, 0.7) 0px 15px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
			},
		},
	},
	plugins: [],
}
