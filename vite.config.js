/**
 * Vite configuration file
 * Docs: https://vite.dev/config/
 */
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/**
 * Static hosts (GitHub Pages among them) know nothing about client-side routing,
 * so opening https://example.com/preview directly returns their own 404 page.
 * Shipping a copy of index.html as 404.html makes the host serve the app instead,
 * and Vue Router then resolves the path. Drop this if you deploy behind a server
 * that can rewrite unknown paths to index.html.
 */
const spaFallback = () => ({
	name: 'spa-fallback',
	writeBundle(options) {
		const index = resolve(options.dir, 'index.html');
		if (existsSync(index)) copyFileSync(index, resolve(options.dir, '404.html'));
	},
});

export default defineConfig(({ mode }) => ({
	/**
	 * Public base path. Defaults to "/" for a site served from a domain root.
	 * The GitHub Pages workflow sets BASE_URL to the published Pages URL, so the
	 * built assets resolve under https://<user>.github.io/<repository>/.
	 */
	base: process.env.BASE_URL || '/',

	plugins: [vue(), spaFallback()],

	/**
	 * Pre-bundle the runtime dependencies at start-up. Without this list Vite
	 * discovers them lazily and, when it finds one mid-session, it re-optimises
	 * and forces a full page reload - which looks exactly like "HMR stopped
	 * working". Add any new runtime dependency here.
	 */
	optimizeDeps: {
		include: ['vue', 'vue-router'],
	},

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
