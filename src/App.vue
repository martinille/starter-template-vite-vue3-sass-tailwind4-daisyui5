<script setup>
import { RouterView } from 'vue-router';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
	<TheHeader />

	<main class="py-8">
		<RouterView />
	</main>

	<TheFooter />
</template>

<style scoped lang="scss">
/* Component-scoped Sass goes here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
