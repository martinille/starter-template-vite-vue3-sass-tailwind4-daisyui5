<script setup>

</script>

<template>
	<div class="card card-border w-full border-base-300 bg-base-100 card-sm overflow-hidden">
		<div class="card-body gap-4">
			<div class="grid grid-cols-7 border-b border-dashed border-b-base-300 pb-3">
				<div class="flex flex-col items-center py-1 px-2 rounded-field">
					<span class="text-sm font-semibold">12</span>
					<span class="text-[10px] font-semibold opacity-50">M</span>
				</div>
				<div class="flex flex-col items-center py-1 px-2 rounded-field">
					<span class="text-sm font-semibold">13</span>
					<span class="text-[10px] font-semibold opacity-50">T</span>
				</div>
				<div class="flex flex-col items-center py-1 px-2 rounded-field bg-primary text-primary-content">
					<span class="text-sm font-semibold">14</span>
					<span class="text-[10px] font-semibold opacity-50">W</span>
				</div>
				<div class="flex flex-col items-center py-1 px-2 rounded-field">
					<span class="text-sm font-semibold">15</span>
					<span class="text-[10px] font-semibold opacity-50">T</span>
				</div>
				<div class="flex flex-col items-center py-1 px-2 rounded-field">
					<span class="text-sm font-semibold">16</span>
					<span class="text-[10px] font-semibold opacity-50">F</span>
				</div>
				<div class="flex flex-col items-center py-1 px-2 rounded-field">
					<span class="text-sm font-semibold">17</span>
					<span class="text-[10px] font-semibold opacity-50">S</span>
				</div>
				<div class="flex flex-col items-center py-1 px-2 rounded-field">
					<span class="text-sm font-semibold">18</span>
					<span class="text-[10px] font-semibold opacity-50">S</span>
				</div>
			</div>
			<div>
				<label class="input input-sm input-border w-auto flex gap-2 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
						<path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></path>
					</svg>
					<input type="text" placeholder="Search for events">
				</label>
			</div>
			<div class="flex flex-col gap-2">
				<label class="flex gap-2 items-center cursor-pointer">
					<input type="checkbox" class="toggle toggle-sm toggle-primary" checked="">
					<span class="text-xs">Show all day events</span>
				</label>
			</div>
		</div>
		<div class="bg-base-200">
			<div class="flex items-center gap-2 p-4">
				<div class="grow">
					<div class="text-sm font-medium">Team Sync Meeting</div>
					<div class="text-xs opacity-60">Weekly product review with design and development teams</div>
				</div>
				<div class="shrink-0">
					<span class="badge badge-sm badge-neutral">1h</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>