<script setup>
import ThemeControllerMini from '@/components/ThemeControllerMini.vue';
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

			<button type="button" class="btn btn-ghost btn-circle" aria-label="Search">
				<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</button>
			<button type="button" class="btn btn-ghost btn-circle" aria-label="Notifications">
				<span class="indicator">
					<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>
					<span class="badge badge-xs badge-primary indicator-item"></span>
				</span>
			</button>
		</div>
	</header>

	<Breadcrumbs />
</template>
