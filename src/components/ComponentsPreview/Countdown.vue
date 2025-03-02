<script setup>
import { ref, onMounted } from 'vue'

const counter = ref(59)

function count() {
	if (counter.value > 0) {
		counter.value--
		setTimeout(count, 1000)
	} else {
		counter.value = 59
		setTimeout(count, 1000)
	}
}

onMounted(() => {
	count()
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

<style scoped lang="scss">

</style>