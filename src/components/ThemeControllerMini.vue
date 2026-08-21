<script setup>
import { availableThemes, currentTheme, setTheme } from '@/utils/theme.js';
</script>

<template>
	<div class="dropdown dropdown-end">
		<div tabindex="0" role="button" class="btn btn-ghost">
			Theme
			<svg class="inline-block size-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" aria-hidden="true">
				<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
			</svg>
		</div>
		<ul tabindex="0" class="dropdown-content bg-base-200 rounded-box z-10 w-40 p-2 shadow-2xl ring-1 ring-base-300">
			<li v-for="theme in availableThemes" :key="theme.name">
				<label
					class="flex items-center gap-2 btn btn-sm btn-block btn-ghost justify-start"
					:class="{ 'btn-active': currentTheme === theme.name }"
				>
					<!-- eslint-disable-next-line vue/no-v-html -->
					<span v-if="theme.icon" v-html="theme.icon"></span>
					<span v-else class="size-5"></span>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller sr-only"
						:aria-label="theme.name"
						:value="theme.name"
						:checked="currentTheme === theme.name"
						@change="setTheme(theme.name)"
					/>
					{{ theme.name }}
				</label>
			</li>
		</ul>
	</div>
</template>
