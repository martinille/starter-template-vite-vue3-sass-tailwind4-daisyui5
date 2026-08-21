/**
 * Vite configuration file
 * Docs: https://vite.dev/config/
 */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => ({
	/**
	 * Public base path. Defaults to "/" for a site served from a domain root.
	 * The GitHub Pages workflow sets BASE_URL to the published Pages URL, so the
	 * built assets resolve under https://<user>.github.io/<repository>/.
	 */
	base: process.env.BASE_URL || '/',

	plugins: [vue()],

	css: {
		devSourcemap: mode === 'development',
	},

	resolve: {
		alias: {
			// Import from anywhere as "@/components/Foo.vue" instead of "../../components/Foo.vue".
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},

	/**
	 * Vitest configuration ("yarn test").
	 * Tests live next to the code they cover, as *.test.js.
	 * Docs: https://vitest.dev/config/
	 */
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['src/test/setup.js'],
		include: ['src/**/*.test.js'],
		coverage: {
			include: ['src/**/*.{js,vue}'],
		},
	},
}));
