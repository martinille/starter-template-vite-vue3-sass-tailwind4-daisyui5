<script setup>
import { useRoute } from 'vue-router';
import { computed } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
	return route.matched.filter(record => record.name.toLowerCase() !== 'home') // Filter out the home route
});

const isHomeActive = computed(() => {
	return route.name && route.name.toLowerCase() === 'home';
});
</script>

<template>
	<div class="border-b border-b-base-200/50 pt-3 pb-2">
		<div class="container-center text-left ">
			<div class="breadcrumbs inline-flex gap-4">
				<span class="text-base-content/70">You are here:</span>
				<ul>
					<li>
						<router-link
							:to="{ name: 'home' }"
							:class="{ 'font-semibold': isHomeActive }"
						>Home</router-link>
					</li>
					<li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
						<router-link
							:to="breadcrumb.path"
							class="font-semibold"
						>{{ breadcrumb.meta.title }}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>