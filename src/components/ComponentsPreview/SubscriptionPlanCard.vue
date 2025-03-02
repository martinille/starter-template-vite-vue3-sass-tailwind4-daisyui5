<script setup>

</script>

<template>
	<div class="card card-border border-base-300 bg-base-100 w-full max-w-70">
		<div class="flex justify-center">
			<div class="tabs tabs-box inline-flex flex-nowrap m-4 bg-base-300"><input type="radio" name="my_tabs_1" role="tab" class="tab w-1/2" aria-label="Monthly">
				<div class="w-1/2 indicator">
					<div class="indicator-item badge badge-warning badge-xs">SALE</div>
					<input type="radio" name="my_tabs_1" role="tab" class="tab w-full" aria-label="Yearly" checked=""></div>
			</div>
		</div>
		<div class="card-body gap-4 pt-2">
			<div class="flex flex-col"><h4 class="tracking-wide opacity-50 font-bold">Starter Plan</h4>
				<div><span class="text-4xl font-black">$200</span><span class="opacity-50">/month</span></div>
			</div>
			<div class="flex flex-col text-xs my-2">
				<div class="flex gap-2 items-center border-b border-b-accent/5 pb-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 text-success">
						<path fill-rule="evenodd"
							d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
							clip-rule="evenodd"></path>
					</svg>
					20 Tokens per day
				</div>
				<div class="flex gap-2 items-center border-b border-b-accent/5 pb-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 text-success">
						<path fill-rule="evenodd"
							d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
							clip-rule="evenodd"></path>
					</svg>
					10 Projects
				</div>
				<div class="flex gap-2 items-center border-b border-b-accent/5 pb-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 text-success">
						<path fill-rule="evenodd"
							d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
							clip-rule="evenodd"></path>
					</svg>
					API Access
				</div>
				<div class="flex gap-2 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 text-error">
						<path fill-rule="evenodd"
							d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
							clip-rule="evenodd"></path>
					</svg>
					Priority Support
				</div>
			</div>
			<button class="btn btn-primary">Buy Now</button>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>