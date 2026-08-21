<script setup>
import { ref } from 'vue'

const initialAlerts = [
	{
		id: 1,
		style: 'alert-info',
		text: 'A new version is ready to install.',
		path: 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z',
	},
	{
		id: 2,
		style: 'alert-success',
		text: 'Your profile has been saved.',
		path: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
	},
	{
		id: 3,
		style: 'alert-error',
		text: 'The upload failed. Please try again.',
		path: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z',
	},
]

const alerts = ref([...initialAlerts])

function dismiss(id) {
	alerts.value = alerts.value.filter((alert) => alert.id !== id)
}

function reset() {
	alerts.value = [...initialAlerts]
}
</script>

<template>
	<div class="card card-sm card-border border-base-300 bg-base-100 w-full max-w-80">
		<div class="card-body gap-4">
			<h2 class="font-semibold">Alerts</h2>

			<div v-if="alerts.length" class="flex flex-col gap-2">
				<div v-for="alert in alerts" :key="alert.id" class="alert alert-soft grid-cols-[auto_1fr_auto] items-start gap-2 text-xs font-bold" :class="alert.style">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 shrink-0">
						<path stroke-linecap="round" stroke-linejoin="round" :d="alert.path"></path>
					</svg>
					<span class="whitespace-normal leading-snug" v-text="alert.text"></span>
					<button type="button" class="btn btn-xs btn-circle btn-ghost" :aria-label="`Dismiss: ${alert.text}`" @click="dismiss(alert.id)">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
							<path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
						</svg>
					</button>
				</div>
			</div>

			<div v-else class="flex flex-col items-center gap-2 py-6 text-center">
				<span class="text-3xl">🎉</span>
				<p class="text-sm font-semibold">All alerts dismissed</p>
				<p class="text-xs text-base-content/60">Nothing needs your attention right now.</p>
			</div>

			<button type="button" class="btn btn-sm btn-outline btn-block" @click="reset">Reset</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
