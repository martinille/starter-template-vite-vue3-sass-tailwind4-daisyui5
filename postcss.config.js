/**
 * PostCSS configuration file
 *
 * This is what compiles Tailwind CSS in this template.
 *
 * Tailwind 4 also ships a first-party Vite plugin (@tailwindcss/vite), but that
 * plugin only handles plain .css files - it never sees main.scss. Because this
 * template runs the styles through Sass first, Tailwind has to run afterwards,
 * as a PostCSS plugin. If you drop Sass, you can switch to @tailwindcss/vite.
 *
 * Autoprefixer is intentionally not here: Tailwind 4 adds vendor prefixes itself.
 *
 * Docs: https://tailwindcss.com/docs/installation/using-postcss
 */
import tailwindcss from '@tailwindcss/postcss';

export default {
	plugins: [tailwindcss],
};
