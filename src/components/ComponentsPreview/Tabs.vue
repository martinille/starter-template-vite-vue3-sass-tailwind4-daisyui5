<script setup>

</script>

<template>
	<div class="w-full">
		<div role="tablist" class="tabs tabs-lift">
			<input type="radio" name="product-tabs" role="tab" class="tab" aria-label="Overview" checked="checked">
			<div class="tab-content bg-base-100 border-base-300 p-6">
				A lightweight starter kit with routing, theming and a preview gallery already wired up.
			</div>
			<input type="radio" name="product-tabs" role="tab" class="tab" aria-label="Specification">
			<div class="tab-content bg-base-100 border-base-300 p-6">
				Built on Vue 3, Vite, Sass, Tailwind CSS 4 and DaisyUI 5, with no runtime dependencies beyond Vue.
			</div>
			<input type="radio" name="product-tabs" role="tab" class="tab" aria-label="Support">
			<div class="tab-content bg-base-100 border-base-300 p-6">
				Questions and bug reports are handled through the issue tracker in the project repository.
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
