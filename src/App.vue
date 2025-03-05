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

	<TheFooter/>
</template>

<style scoped lang="scss">

</style>
