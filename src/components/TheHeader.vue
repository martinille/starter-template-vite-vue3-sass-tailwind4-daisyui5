<script setup>
import ThemeControllerMini from '@/components/ThemeControllerMini.vue';
import HeaderNotifications from '@/components/HeaderNotifications.vue';
import HeaderSearch from '@/components/HeaderSearch.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

const title = 'Template Preview';
const pages = [
	{ name: 'home', label: 'Home' },
	{ name: 'componentsPreview', label: 'Components Preview' },
];
</script>

<template>
	<header class="navbar bg-base-100 shadow-sm">
		<div class="dropdown md:hidden">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle" aria-label="Open menu">
				<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
				</svg>
			</div>
			<ul tabindex="0" class="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
				<li v-for="page in pages" :key="page.name">
					<RouterLink :to="{ name: page.name }">{{ page.label }}</RouterLink>
				</li>
			</ul>
		</div>

		<div class="flex-1 w-auto">
			<RouterLink :to="{ name: 'home' }" class="text-xl px-2">{{ title }}</RouterLink>
		</div>

		<div class="inline-flex flex-none items-center gap-x-2">
			<RouterLink
				v-for="page in pages"
				:key="page.name"
				:to="{ name: page.name }"
				class="btn btn-ghost hidden md:inline-flex"
				exact-active-class="btn-active"
			>
				{{ page.label }}
			</RouterLink>

			<ThemeControllerMini class="mx-2" />

			<HeaderSearch />
			<HeaderNotifications />
		</div>
	</header>

	<Breadcrumbs />
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
