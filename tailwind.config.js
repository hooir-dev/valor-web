/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['corporate', 'business'],
	},
	theme: {
		screens: {
			'sd': { 'max': '408px' },
			'sc': { 'max': '460px' },
			'wd': { 'max': '550px' },
			'md': { 'max': '750px' },
			'bw': { 'max': '850px' },
			'nj': { 'max': '950px' },
			'yw': { 'max': '1130px' },
			'yl': { 'max': '1050px' },
			'cw': { 'max': '1216px' },
			'fi': { 'max': '1440px' },
			// >
			'dd': { 'min': '750px' },
			'fa': { 'min': '1440px' },
			'wa': { 'min': '1500px' },
			'ja': { 'min': '1920px' },
		},
	},
};
