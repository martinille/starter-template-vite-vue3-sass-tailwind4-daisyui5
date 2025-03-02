<script setup>

</script>

<template>
	<div class="card card-border border-base-300 bg-base-100 card-sm w-full max-w-80 overflow-hidden">
		<div class="border-b border-base-300 border-dashed">
			<div class="flex items-center gap-2 p-4">
				<div class="grow">
					<div class="text-sm font-medium flex gap-2 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-40">
							<path stroke-linecap="round" stroke-linejoin="round"
								d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"></path>
						</svg>
						Create new account
					</div>
				</div>
			</div>
		</div>
		<div class="card-body gap-4">
			<p class="text-xs opacity-60">Registration is free and only takes a minute</p>
			<div class="flex flex-col gap-1">
				<label class="input input-border flex items-center gap-2 max-w-none">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path>
					</svg>
					<input type="text" class="grow" placeholder="Username">
				</label>
			</div>
			<div class="flex flex-col gap-1">
				<label class="input input-border flex items-center gap-2 max-w-none">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
						<path fill-rule="evenodd"
							d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
							clip-rule="evenodd"></path>
					</svg>
					<input type="password" class="grow" placeholder="password">
				</label>
				<span class="text-[0.6875rem] px-1 flex gap-2 items-center text-base-content/60">
		          <span class="status inline-block status-error"></span>
		          Password must be 8+ characters
		        </span>
			</div>
			<label class="flex gap-2 items-center text-xs text-base-content/60">
				<input type="checkbox" class="toggle toggle-xs"> Accept terms without reading
			</label>
			<label class="flex gap-2 items-center text-xs text-base-content/60">
				<input type="checkbox" class="toggle toggle-xs"> Subscribe to spam emails
			</label>
			<div class="card-actions items-center gap-6">
				<button class="btn btn-primary">Register</button>
				<button class="link">Or login</button>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>