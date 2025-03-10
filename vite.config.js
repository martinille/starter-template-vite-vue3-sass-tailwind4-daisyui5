import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig(({mode}) => ({
        base: process.env.BASE_URL,
	plugins: [vue(), tailwindcss()],
	css: {
		devSourcemap: mode === "development",
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
}))
