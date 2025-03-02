<script setup>

</script>

<template>
	<div class="w-full max-w-80">
	<div class="card card-border border-base-300 w-full bg-base-100 card-sm">
		<figure class="p-2">
			<img class="rounded-[calc(var(--radius-box)-.5rem)] w-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes">
		</figure>
		<div class="card-body gap-4">
			<h2 class="flex justify-between items-center">
				<span class="font-semibold">Nike Shoes</span>
				<span class="badge badge-success badge-sm">SALE</span>
			</h2>
			<div class="flex gap-2 items-center">
				<div class="rating rating-xs">
					<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400">
					<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400">
					<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400">
					<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400">
					<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked="">
				</div>
				<span class="text-xs opacity-60">420 reviews</span>
			</div>
			<div>
				<span class="text-2xl font-semibold">$120</span>
				<span class="text-sm opacity-60 line-through">$150</span>
			</div>
		</div>
	</div>
	</div>
</template>

<style scoped lang="scss">

</style>