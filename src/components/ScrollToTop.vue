<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const visible = ref(false);

const update = () => {
	visible.value = window.scrollY > 400;
};

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
	update();
	window.addEventListener('scroll', update, { passive: true });
});

onUnmounted(() => {
	window.removeEventListener('scroll', update);
});
</script>

<template>
	<Transition
		enter-from-class="opacity-0 translate-y-2"
		leave-to-class="opacity-0 translate-y-2"
		enter-active-class="transition duration-200"
		leave-active-class="transition duration-200"
	>
		<button
			v-if="visible"
			type="button"
			class="btn btn-primary btn-circle fixed bottom-6 right-6 z-30 shadow-lg"
			aria-label="Scroll back to top"
			@click="scrollToTop"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
			</svg>
		</button>
	</Transition>
</template>
