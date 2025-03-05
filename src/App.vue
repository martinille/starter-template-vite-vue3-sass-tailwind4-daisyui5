<script setup>
import { RouterView } from "vue-router";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
	<TheHeader/>

	<main class="py-8">
		<router-view />
	</main>
<!--		<HelloWorld msg="Vite + Vue"/>-->

	<TheFooter/>
</template>

<style lang="scss" scoped>
.logo {
	height: 1.25rem;
	padding: 0em;
	will-change: filter;
	transition: filter 300ms;

	&:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}

	&.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
}
</style>
