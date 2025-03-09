<script setup>
import { ref } from "vue";
import logoVue from "@/assets/images/vue.svg";
import logoDaisyUi from '@/assets/images/daisyui-logomark.svg';
import logoTailwindcss from '@/assets/images/tailwindcss.svg';
import logoSass from '@/assets/images/sass.svg';
const logoVite = import.meta.env.BASE_URL + '/vite.svg';

const items = ref([
	{
		image: logoVite,
		title: 'Vite',
		desc: 'Build tool',
		url: 'https://vite.dev',
	}, {
		image: logoVue,
		title: 'Vue 3',
		desc: 'Framework',
		url: 'https://vuejs.org',
	}, {
		image: logoSass,
		title: 'Sass',
		desc: 'CSS preprocessor',
		url: 'https://sass-lang.com',
	}, {
		image: logoTailwindcss,
		title: 'Tailwind CSS 4',
		desc: 'CSS framework',
		url: 'https://tailwindcss.com/',
	}, {
		image: logoDaisyUi,
		title: 'DaisyUI 5',
		desc: 'UI library',
		url: 'https://daisyui.com/',
	},
]);
</script>

<template>
	<div class="py-6">
		<h2>Packages included:</h2>

		<div class="flex flex-wrap gap-4 items-center justify-center">
			<div v-for="item in items" class="flex flex-row flex-grow gap-2 p-4 bg-base-100 items-center h-full rounded-box ring-1 ring-base-content/10 text-left max-w-60">
				<div v-if="item.image">
					<img :src="item.image" class="size-10" alt="Vite logo"/>
				</div>
				<div>
					<h4>
						<a v-if="item.url" :href="item.url" class="underline hover:no-underline">{{ item.title }}</a>
						<span v-else>{{ item.title }}</span>
					</h4>
					<div class="text-xs uppercase font-semibold opacity-60">
						{{ item.desc }}
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped lang="scss">

</style>
