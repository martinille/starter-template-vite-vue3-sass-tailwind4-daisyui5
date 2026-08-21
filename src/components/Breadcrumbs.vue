<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isHome = computed(() => route.name === 'home');

const breadcrumbs = computed(() =>
	route.matched.filter((record) => record.name !== 'home' && record.meta?.title)
);
</script>

<template>
	<nav class="border-b border-b-base-200/50 pt-3 pb-2" aria-label="Breadcrumb">
		<div class="container-center text-left">
			<div class="breadcrumbs inline-flex gap-4">
				<span class="text-base-content/70">You are here:</span>
				<ul>
					<li>
						<RouterLink :to="{ name: 'home' }" :class="{ 'font-semibold': isHome }">Home</RouterLink>
					</li>
					<li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path">
						<RouterLink :to="{ name: breadcrumb.name, params: route.params }" class="font-semibold">{{ breadcrumb.meta.title }}</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
