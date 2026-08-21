<script setup>
import { nextTick, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const term = ref('');
const input = ref(null);
const panel = ref(null);

const open = async () => {
	await nextTick();
	input.value?.focus();
};

const close = () => {
	panel.value?.blur();
	input.value?.blur();
};

const submit = () => {
	const query = term.value.trim();
	router.push({ name: 'componentsPreview', query: query ? { q: query } : {} });
	term.value = '';
	close();
};
</script>

<template>
	<div ref="panel" class="dropdown dropdown-end">
		<button type="button" class="btn btn-ghost btn-circle" aria-label="Search components" @click="open">
			<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</button>
		<div tabindex="-1" class="dropdown-content bg-base-200 rounded-box z-20 mt-3 w-72 p-3 shadow-2xl ring-1 ring-base-300">
			<form @submit.prevent="submit">
				<label class="input input-sm w-full">
					<span class="sr-only">Search components</span>
					<input
						ref="input"
						v-model="term"
						type="search"
						placeholder="Search components…"
						@keydown.esc="close"
					/>
				</label>
				<p class="text-xs opacity-60 mt-2">Press Enter to search the components preview.</p>
			</form>
		</div>
	</div>
</template>
