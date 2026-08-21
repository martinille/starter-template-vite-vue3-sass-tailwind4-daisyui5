<script setup>
import { SYSTEM_THEME } from '@/utils/theme.js';

defineProps({
	theme: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<span
		v-if="theme.name !== SYSTEM_THEME"
		:data-theme="theme.name"
		class="inline-grid grid-cols-2 gap-0.5 rounded-sm bg-transparent shrink-0"
		aria-hidden="true"
	>
		<span class="size-2 rounded-xs bg-primary"></span>
		<span class="size-2 rounded-xs bg-secondary"></span>
		<span class="size-2 rounded-xs bg-accent"></span>
		<span class="size-2 rounded-xs bg-neutral"></span>
	</span>
	<!-- eslint-disable-next-line vue/no-v-html -->
	<span v-else-if="theme.icon" class="shrink-0" aria-hidden="true" v-html="theme.icon"></span>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
