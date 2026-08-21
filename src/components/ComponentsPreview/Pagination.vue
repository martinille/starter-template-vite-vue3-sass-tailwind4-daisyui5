<script setup>
import { ref } from "vue";

const pages = [1, 2, 3, 4, 5];
const currentPage = ref(1);

function goTo(page) {
	currentPage.value = Math.min(Math.max(page, 1), pages.length);
}
</script>

<template>
	<div class="card card-border border-base-300 bg-base-100 card-sm w-full max-w-80">
		<div class="card-body gap-4 items-center">
			<h2 class="font-semibold flex items-center gap-2 self-start">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-40">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path>
				</svg>
				Pagination
			</h2>
			<div class="join">
				<button type="button" class="join-item btn btn-sm" :disabled="currentPage === 1" @click="goTo(currentPage - 1)">Prev</button>
				<button
					v-for="page in pages"
					:key="page"
					type="button"
					class="join-item btn btn-sm"
					:class="{ 'btn-active': currentPage === page }"
					:aria-label="`Page ${page}`"
					:aria-current="currentPage === page ? 'page' : undefined"
					@click="goTo(page)"
				>
					{{ page }}
				</button>
				<button type="button" class="join-item btn btn-sm" :disabled="currentPage === pages.length" @click="goTo(currentPage + 1)">Next</button>
			</div>
			<p class="text-xs text-base-content/70">Page {{ currentPage }} of {{ pages.length }}</p>
		</div>
	</div>
</template>
