<script setup>
import { ref } from 'vue'

let playing = ref(false)
</script>

<template>
	<div class="card card-sm card-border border-base-300 bg-base-100 w-full max-w-80 overflow-hidden">
		<div class="card-body my-2">
			<div class="flex justify-around items-center">
				<!-- Previous Track -->
				<button class="btn btn-square btn-neutral">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 shrink-0">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"></path>
					</svg>
				</button>

				<!-- Play/Pause -->
				<button class="btn btn-square btn-neutral btn-lg" @click="playing = !playing">
					<!-- Play -->
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 shrink-0" v-if="!playing">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
					</svg>
					<!-- Pause -->
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 shrink-0" v-else>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
					</svg>
				</button>

				<!-- Next Track -->
				<button class="btn btn-square btn-neutral">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 shrink-0">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"></path>
					</svg>
				</button>
			</div>
			<div class="mt-2 text-center">
				<h6 class="text-sm font-bold">PM Zoomcall ASMR</h6>
				<p class="text-xs opacity-50">Project Manager talking for 2 hours</p>
			</div>
		</div>
		<div class="flex flex-col px-6 py-4 border-t border-base-300">
			<div class="relative mt-6">
				<div class="absolute tooltip top-2 tooltip-open before:text-xs" style="inset-inline-start:27%" data-tip="24:58"></div>
				<progress class="progress" value="27" max="100"></progress>
			</div>
			<div class="flex text-xs opacity-50 justify-between">
				<span>0:00</span>
				<span>58:00</span>
			</div>
		</div>
		<div class="flex justify-around items-center pb-6 px-2">
			<button class="btn btn-square">
				<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"
						fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path>
					<path
						d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33"
						stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>
			</button>
			<button class="btn btn-square">
				<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M40 33L44 37L40 41" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M40 7L44 11L40 15" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M44 11H37C29.8203 11 24 16.8203 24 24C24 31.1797 29.8203 37 37 37H44" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
					<path d="M4 37H11C18.1797 37 24 31.1797 24 24C24 16.8203 18.1797 11 11 11H4" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
				</svg>
			</button>
			<button class="btn btn-square">
				<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 25C4 18.3502 9.39624 13 16 13H44" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M38 7L44 13L38 19" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M44 23C44 29.6498 38.6038 35 32 35H4" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M10 41L4 35L10 29" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>
			</button>
			<button class="btn btn-square">
				<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M42 30V24.4615C42 14.2655 33.9411 6 24 6C14.0589 6 6 14.2655 6 24.4615V30" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M34 32C34 29.7909 35.7909 28 38 28H42V42H38C35.7909 42 34 40.2091 34 38V32Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path>
					<path d="M42 32H44C45.1046 32 46 32.8954 46 34V36C46 37.1046 45.1046 38 44 38H42V32Z" fill="currentColor"></path>
					<path d="M6 32H4C2.89543 32 2 32.8954 2 34V36C2 37.1046 2.89543 38 4 38H6V32Z" fill="currentColor"></path>
					<path d="M6 28H10C12.2091 28 14 29.7909 14 32V38C14 40.2091 12.2091 42 10 42H6V28Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path>
				</svg>
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>