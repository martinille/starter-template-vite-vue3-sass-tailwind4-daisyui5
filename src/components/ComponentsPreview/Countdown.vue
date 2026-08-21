<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const counter = ref(59)
let timer

function count() {
	counter.value = counter.value > 0 ? counter.value - 1 : 59
	timer = setTimeout(count, 1000)
}

onMounted(() => {
	count()
})

onUnmounted(() => {
	clearTimeout(timer)
})
</script>

<template>
	<div class="card card-border border-base-300 w-full max-w-80 p-6 bg-base-100">
		<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
			<div class="flex flex-col">
				<span class="font-mono text-5xl countdown">
					<span style="--value: 14">14</span>
				</span>
				days
			</div>
			<div class="flex flex-col">
				<span class="font-mono text-5xl countdown">
					<span style="--value: 10">10</span>
				</span>
				hours
			</div>
			<div class="flex flex-col">
				<span class="font-mono text-5xl countdown">
					<span style="--value: 24">24</span>
				</span>
				min
			</div>
			<div class="flex flex-col">
				<span class="font-mono text-5xl countdown">
					<span :style="{ '--value': counter }">{{ counter }}</span>
				</span>
				sec
			</div>
		</div>
	</div>
</template>
