<script setup>
import { availableThemes, currentTheme, setTheme } from '@/utils/theme.js';
</script>

<template>
	<div class="mb-8">
		<h2>Theme management implemented. You can change the theme:</h2>
		<div class="flex flex-wrap gap-2 items-center justify-center">
			<label
				v-for="theme in availableThemes"
				:key="theme.name"
				class="btn btn-ghost"
				:class="{ 'btn-active': currentTheme === theme.name }"
			>
				<!-- eslint-disable-next-line vue/no-v-html -->
				<span v-if="theme.icon" v-html="theme.icon"></span>
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
