/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#C2007A",
				secondary: "#D76886",
				third: "#EFD8DE",
				four: "#FEEFF3",
			},
			textColor: {
				primary: "#ffffff",
				secondary: "#C2007A",
			},
			// 	outlineColor: {
			// 		primary: "#EF4444",
			// 	},
			borderColor: {
				primary: "#C2007A",
			},
		},
		fontFamily: {
			// kanit: ["Kanit", "sans-serif"],
		},
		screens: {
			xs: "320px",
			sm: "578px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
});
