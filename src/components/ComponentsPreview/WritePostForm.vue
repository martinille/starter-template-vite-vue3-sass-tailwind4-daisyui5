<script setup>

</script>

<template>
	<div class="card card-sm card-border border-base-300 bg-base-100 w-full overflow-hidden">
		<div class="border-b border-base-300 border-dashed">
			<div class="flex items-center gap-2 p-4">
				<div class="grow">
					<div class="text-sm font-medium flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-40">
							<path stroke-linecap="round" stroke-linejoin="round"
								d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path>
						</svg>
						Write a new post
					</div>
				</div>
			</div>
		</div>
		<div class="card-body gap-4">
			<div class="flex justify-between items-center">
				<div class="join">
					<input class="join-item btn btn-xs px-3 font-bold" type="checkbox" name="options" aria-label="B">
					<input class="join-item btn btn-xs px-3 font-mono italic" type="checkbox" name="options" aria-label="I">
					<input class="join-item btn btn-xs px-3 underline" type="checkbox" name="options" aria-label="U">
				</div>
				<button class="btn btn-xs">Add files</button>
			</div>
			<textarea class="textarea textarea-border w-full max-w-none resize-none" placeholder="What's happening?"></textarea>
			<p class="px-2 opacity-40 text-xs">1200 characters remaining</p>
			<div class="card-actions grid grid-cols-2">
				<button class="btn">Draft</button>
				<button class="btn btn-primary">Publish</button>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>