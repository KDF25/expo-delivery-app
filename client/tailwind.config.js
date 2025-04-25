/** @type {import('tailwindcss').Config} */

const colors = {
	primary: {
		DEFAULT: '#47AA52',
	},
	black: {
		DEFAULT: '#000000',
		100: '#374151',
	},
	danger: '#F75555',
}

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors,
		},
	},
	plugins: [],
}

// 👇 экспорт отдельно для использования в TypeScript
module.exports.colors = colors
