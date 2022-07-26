/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#0284c7",
					secondary: "#7c3aed",
					accent: "#0b1222",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
}
