/**
 * PostCSS configuration file
 *
 * Vite works better with PostCSS even though Vite
 * uses @tailwindcss/vite plugin for Tailwind CSS
 * [https://tailwindcss.com/blog/tailwindcss-v4#first-party-vite-plugin]
 */
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
	plugins: [tailwindcss, autoprefixer],
};