<script setup>
import { RouterView } from 'vue-router';
import ScrollToTop from '@/components/ScrollToTop.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
	<a href="#main" class="btn btn-primary sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50">
		Skip to content
	</a>

	<TheHeader />

	<main id="main" class="py-8" tabindex="-1">
		<RouterView v-slot="{ Component, route }">
			<Transition
				mode="out-in"
				enter-from-class="opacity-0"
				leave-to-class="opacity-0"
				enter-active-class="transition-opacity duration-200 motion-reduce:transition-none"
				leave-active-class="transition-opacity duration-150 motion-reduce:transition-none"
			>
				<component :is="Component" :key="route.path" />
			</Transition>
		</RouterView>
	</main>

	<TheFooter />

	<ScrollToTop />
</template>

<style scoped lang="scss">
/* Component-scoped Sass goes here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
