/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				"content": "linear-gradient(180deg, rgba(45, 47, 59, 1) 0%, rgba(31, 32, 43, 1) 81%)",
				"header": "linear-gradient(180deg, rgba(0, 0, 0, 1) 11%, rgba(31, 32, 43, 0) 100%)",
				"index": "url(//cnbl-cdn.bamgrid.com/assets/4f6c5f0c255fc3dc6f615e8a15efd071e34cd862f5ee7bd5c9f26e26f29cd639/original)",
				"search": "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(31, 32, 43, 0) 50%)",
				"focus-s": "linear-gradient(180deg, rgba(0,0,0,0.3085609243697479) 0%, rgba(35,35,35,0) 33%, rgba(232,232,232,0.1) 97%)",
			},
			backgroundColor: {
				"btn-login": "rgba(0, 0, 0, .6)",
			},
			boxShadow: {
				"cards": "rgba(0, 0, 0, 0.7) 0px 15px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
			},
			backgroundPosition: {
				"p-index": "50% bottom",
			},
		},
	},
	plugins: [],
}
