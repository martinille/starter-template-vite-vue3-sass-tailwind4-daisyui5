import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => ({
	base: process.env.BASE_URL || '/',
	plugins: [vue()],
	css: {
		devSourcemap: mode === 'development',
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
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
