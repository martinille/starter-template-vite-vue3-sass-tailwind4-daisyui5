<script setup>
import ThemeSwatch from '@/components/ThemeSwatch.vue';
import { availableThemes, currentTheme, setTheme } from '@/utils/theme.js';
</script>

<template>
	<div class="mb-8">
		<h2>Themes</h2>
		<p class="text-base-content/70 mb-4">Theme switching is already wired up. Pick one to see it applied.</p>
		<div class="flex flex-wrap gap-2 items-center justify-center">
			<label
				v-for="theme in availableThemes"
				:key="theme.name"
				class="btn btn-ghost capitalize"
				:class="{ 'btn-active': currentTheme === theme.name }"
			>
				<ThemeSwatch :theme="theme" />
				{{ theme.name }}
				<input
					type="radio"
					name="theme-buttons"
					class="theme-controller sr-only"
					:aria-label="theme.name"
					:value="theme.name"
					:checked="currentTheme === theme.name"
					@change="setTheme(theme.name)"
				/>
			</label>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
