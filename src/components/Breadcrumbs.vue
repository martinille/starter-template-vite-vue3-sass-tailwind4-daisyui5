<script setup>
import { useRoute } from 'vue-router';
import { computed } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
	return route.matched.filter(record => record.name.toLowerCase() !== 'home') // Filter out the home route
});
</script>

<template>
	<div class="border-b border-b-base-200/50 pt-3 pb-2">
		<div class="container-center text-left ">
			<div class="breadcrumbs inline-flex gap-4">
				<span class="text-base-content/70">You are here:</span>
				<ul>
					<li>
						<router-link to="/">Home</router-link>
					</li>
					<li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
						<router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>