<script setup>
import TemplatePackages from "@/components/Home/TemplatePackages.vue";
import ThemeController from "@/components/Home/ThemeController.vue";
import ComponentsPreview from "@/components/Home/ComponentsPreview.vue";
import Guide from "@/components/Home/Guide.vue";

const title = document.title;
const currentHostname = window.location.hostname;
const demoHostname = "tpl-vue3-tailwind4-daisyui5.brown.sk";
</script>

<template>
	<!-- Title -->
	<div class="container-center text-center">
		<h1>🚀 {{ title }}</h1>
		<div class="text-base-content/70 mb-10">
			<p>Welcome! This template is prepared for you to start your project quickly. You can use it for your frontend projects.</p>
			<p>Vite, Vue 3, Sass, Tailwind CSS 4, and DaisyUI 5 included. <b>Vue router is also included and configured</b>, you could try navigating to another page or to a page that does not exist.</p>
		</div>
	</div>

	<!-- Banner -->
	<div class="mb-10 text-center" v-if="currentHostname !== demoHostname">
		<div class="badge badge-lg badge-soft badge-dash badge-accent h-auto p-1">
			🌐 Check out live demo: <a :href="`https://${ demoHostname }`" target="_blank" class="link">https://{{ demoHostname }}</a>
		</div>
	</div>


	<!-- Packages -->
	<div class="bg-base-300 text-base-content text-center mb-10">
		<div class="container-center pb-4">
			<TemplatePackages/>
		</div>
	</div>

	<!-- Theme Controller -->
	<div class="container-center text-center">
		<ThemeController class="mb-10"/>
	</div>

	<!-- Components Preview -->
	<div class="bg-base-300 text-base-content mb-10">
		<div class="container-center py-10">
			<ComponentsPreview/>
		</div>
	</div>

	<!-- Guide -->
	<div class="container-center">
		<Guide/>
	</div>
</template>

<style scoped lang="scss">

</style>