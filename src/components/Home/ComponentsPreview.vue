<script setup>
import PriceRange from "@/components/ComponentsPreview/PriceRange.vue";
import AccountRegistrationForm from "@/components/ComponentsPreview/AccountRegistrationForm.vue";
import MusicPlayer from "@/components/ComponentsPreview/MusicPlayer.vue";
import SubscriptionPlanCard from "@/components/ComponentsPreview/SubscriptionPlanCard.vue";
</script>

<template>
	<h2 class="text-center">UI blocks (components) preview:</h2>
	<div class="text-base-content/70 mb-8 text-center">
		<p>This template also includes some components that you can use in your projects. You can find the source codes in the <code><span class="icon">📁</span>src/components/ComponentsPreview</code> directory.</p>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<div class="flex items-start justify-center">
			<MusicPlayer class="shadow-[0_20px_30px_-5px_rgba(0,0,0,0.25)]"/>
		</div>
		<div class="flex items-start justify-center">
			<AccountRegistrationForm class="shadow-[0_20px_30px_-5px_rgba(0,0,0,0.25)]"/>
		</div>
		<div class="flex items-start justify-center">
			<PriceRange class="shadow-[0_20px_30px_-5px_rgba(0,0,0,0.25)]"/>
		</div>
		<div class="flex items-start justify-center">
			<SubscriptionPlanCard class="shadow-[0_20px_30px_-5px_rgba(0,0,0,0.25)]"/>
		</div>
	</div>
	<div class="text-center mt-10">
		<router-link :to="{ path: '/preview' }" class="btn btn-lg btn-primary mt-10">
			Check more components <span class="icon">👉</span>
		</router-link>
	</div>
</template>

<style scoped lang="scss">

</style>