<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
	<div class="container-center text-center py-16">
		<p class="text-9xl font-bold text-accent leading-none">404</p>
		<h1 class="mt-4">Page not found</h1>
		<p class="text-lg mt-2 text-base-content/70">
			There is no route matching <code>{{ route.fullPath }}</code>.
		</p>
		<p class="text-base-content/70 mt-2">
			The link may be outdated, or the page may have moved.
		</p>

		<div class="flex flex-wrap gap-3 justify-center mt-10">
			<RouterLink :to="{ name: 'home' }" class="btn btn-lg btn-primary">Go back to home</RouterLink>
			<RouterLink :to="{ name: 'componentsPreview' }" class="btn btn-lg btn-ghost">Browse components</RouterLink>
			<button type="button" class="btn btn-lg btn-ghost" @click="$router.back()">Go back</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
