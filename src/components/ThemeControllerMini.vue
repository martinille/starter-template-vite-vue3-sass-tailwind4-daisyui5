<script setup>
import { Themes } from "@/utils/Themes.js";

const availableThemes = Themes.availableThemes;
const theme = Themes.currentTheme;

const setTheme = (newTheme) => {
	Themes.apply(newTheme);
}
</script>

<template>
	<div class="dropdown">
		<div tabindex="0" role="button" class="btn btn-ghost">
			Theme
			<svg class="inline-block size-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
				<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
			</svg>
		</div>
		<ul tabindex="0" class="dropdown-content bg-base-200 rounded-box z-10 w-40 p-2 shadow-2xl ring-1 ring-base-300">
			<li v-for="t in availableThemes" :key="t.name">

				<label class="flex items-center gap-2 btn btn-sm btn-block btn-ghost justify-start" :class="{ 'btn-active': theme === t.name }">
					<span v-if="t.icon" v-html="t.icon"></span>
					<span v-else class="size-5"></span>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller hidden"
						:aria-label="t.name"
						:value="t.name"
						:checked="theme === t.name"
						@change="setTheme(t.name)"
					/>
					{{ t.name }}
				</label>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">

</style>