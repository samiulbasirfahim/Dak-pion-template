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
					primary: "#171c2a",
					secondary: "#52d794",
					accent: "#0b1222",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
}
