<script setup>
import { APP_TITLE, GITHUB_REPO } from '@/config.js';

const year = new Date().getFullYear();
</script>

<template>
	<footer class="bg-neutral text-neutral-content p-10">
		<div class="footer sm:footer-horizontal container-center">
			<aside>
				<p class="footer-title opacity-100">{{ APP_TITLE }}</p>
				<p class="max-w-xs opacity-70">
					A pre-configured starting point for Vue 3 projects, with routing, theming and
					a component library already wired up.
				</p>
			</aside>
			<nav>
				<h6 class="footer-title">Pages</h6>
				<RouterLink :to="{ name: 'home' }" class="link link-hover">Home</RouterLink>
				<RouterLink :to="{ name: 'componentsPreview' }" class="link link-hover">Components Preview</RouterLink>
			</nav>
			<nav>
				<h6 class="footer-title">Documentation</h6>
				<a href="https://vuejs.org" class="link link-hover" rel="noopener">Vue 3</a>
				<a href="https://router.vuejs.org" class="link link-hover" rel="noopener">Vue Router</a>
				<a href="https://tailwindcss.com" class="link link-hover" rel="noopener">Tailwind CSS</a>
				<a href="https://daisyui.com" class="link link-hover" rel="noopener">DaisyUI</a>
			</nav>
			<nav>
				<h6 class="footer-title">Project</h6>
				<a :href="GITHUB_REPO" class="link link-hover" rel="noopener">GitHub repository</a>
				<a :href="`${GITHUB_REPO}/issues`" class="link link-hover" rel="noopener">Report an issue</a>
				<a :href="`${GITHUB_REPO}/blob/master/LICENSE.md`" class="link link-hover" rel="noopener">MIT licence</a>
			</nav>
		</div>
		<div class="container-center border-t border-neutral-content/15 mt-8 pt-4 text-sm opacity-60">
			© {{ year }} · Released under the MIT licence.
		</div>
	</footer>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
