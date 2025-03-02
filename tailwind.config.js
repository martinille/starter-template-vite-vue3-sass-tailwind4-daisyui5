/**
 * Tailwind CSS configuration file
 * https://tailwindcss.com/docs/configuration
 *
 * Note: Tailwind CSS v4 does not require a JS file configuration anymore
 * but it's still useful for advanced configuration and IntelliSense support in IDEs.
 */

/** @type {import('tailwindcss/tailwind-config')} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
