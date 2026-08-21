<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const INITIAL_SECONDS = 14 * 86400 + 10 * 3600 + 24 * 60 + 59

const remaining = ref(INITIAL_SECONDS)
let timer

const days = computed(() => Math.floor(remaining.value / 86400))
const hours = computed(() => Math.floor((remaining.value % 86400) / 3600))
const minutes = computed(() => Math.floor((remaining.value % 3600) / 60))
const seconds = computed(() => remaining.value % 60)

function tick() {
	remaining.value = remaining.value > 0 ? remaining.value - 1 : INITIAL_SECONDS
}

onMounted(() => {
	timer = setInterval(tick, 1000)
})

onUnmounted(() => {
	clearInterval(timer)
})
</script>

<template>
	<div class="card card-border border-base-300 w-full max-w-80 p-4 bg-base-100">
		<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
			<div class="flex flex-col">
				<span class="font-mono text-4xl countdown">
					<span :style="{ '--value': days }">{{ days }}</span>
				</span>
				days
			</div>
			<div class="flex flex-col">
				<span class="font-mono text-4xl countdown">
					<span :style="{ '--value': hours }">{{ hours }}</span>
				</span>
				hours
			</div>
			<div class="flex flex-col">
				<span class="font-mono text-4xl countdown">
					<span :style="{ '--value': minutes }">{{ minutes }}</span>
				</span>
				mins
			</div>
			<div class="flex flex-col">
				<span class="font-mono text-4xl countdown">
					<span :style="{ '--value': seconds }">{{ seconds }}</span>
				</span>
				secs
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
