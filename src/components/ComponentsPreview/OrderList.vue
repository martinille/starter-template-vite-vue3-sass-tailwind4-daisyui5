<script setup>

</script>

<template>
	<div class="card card-border border-base-300 bg-base-100 card-sm w-full max-w-70">
		<div class="card-body gap-4">
			<h2 class="flex justify-between items-center">
        <span class="font-semibold items-center flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-40">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path>
          </svg>
          Recent orders
        </span>
			</h2>
			<div class="flex flex-col text-xs">
				<div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
					Charlie Chapman <span class="badge badge-xs badge-info">Send</span>
				</div>
				<div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
					Howard Hudson <span class="badge badge-xs badge-error">Failed</span>
				</div>
				<div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
					Fiona Fisher <span class="badge badge-xs badge-warning">In progress</span>
				</div>
				<div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
					Nick Nelson <span class="badge badge-xs badge-success">Completed</span>
				</div>
				<div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
					Amanda Anderson <span class="badge badge-xs badge-success">Completed</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>