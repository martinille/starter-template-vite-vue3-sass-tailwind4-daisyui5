<script setup>
import { useRouter } from "vue-router";
import ThemeControllerMini from "@/components/ThemeControllerMini.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

const router = useRouter();
const title = 'Template Preview';
</script>

<template>
	<div class="navbar bg-base-100 shadow-sm">
		<div class="inline-flex gap-x-2">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
					</svg>
				</div>
				<ul
					tabindex="0"
					class="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
					<li><a>Homepage</a></li>
					<li><a>Portfolio</a></li>
					<li><a>About</a></li>
				</ul>
			</div>
		</div>
		<div class="flex-1 w-auto">
			<router-link :to="{ name: 'home' }" class="text-xl">{{ title }}</router-link>
		</div>
		<div class="inline-flex flex-none gap-x-2">
			<router-link
				:to="{ name: 'home' }"
				class="btn btn-ghost"
				:class="{ 'btn-active': router.currentRoute.value.name === 'home' }"
			>Home</router-link>

			<router-link
				:to="{ name: 'componentsPreview' }"
				class="btn btn-ghost"
				:class="{ 'btn-active': router.currentRoute.value.name === 'componentsPreview' }"
			>Components Preview</router-link>

			<ThemeControllerMini class="mx-2"/>

			<button class="btn btn-ghost btn-circle">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</button>
			<button class="btn btn-ghost btn-circle">
				<span class="indicator">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>
					<span class="badge badge-xs badge-primary indicator-item"></span>
				</span>
			</button>
		</div>
	</div>

	<Breadcrumbs/>
</template>

<style scoped lang="scss">

</style>