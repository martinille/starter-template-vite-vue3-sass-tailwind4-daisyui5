<script setup>
import { ref } from "vue";

const projectNameDefault = '<project-name>';
const projectName = ref("");
</script>

<template>
	<h2 class="text-center">Getting started</h2>

	<div class="container max-w-6xl mx-auto mb-10">
		<div class="flex flex-col flex-wrap items-start justify-center gap-4 w-full mb-10 md:flex-row">
			<div class="w-full min-w-[300px] md:w-[40%]">
				<h3 class="mt-0">
					<span class="badge badge-lg badge-success mr-2">1</span>
					Clone the repository
				</h3>
				<p class="mb-2 text-base-content/70">Clone this repository to your local machine.</p>
				<div class="flex gap-2 items-center text-base-content/70">
					<label class="form-label whitespace-nowrap" for="project-name">Project Name:</label>
					<input
						id="project-name"
						v-model="projectName"
						type="text"
						class="input input-bordered"
						placeholder="my-project"
					/>
				</div>
			</div>
			<div class="mockup-code text-md w-full flex-1">
				<pre class="opacity-50 text-bold"><code># clone this starter template</code></pre>
				<pre><code>git clone https://github.com/martinille/starter-template-vite-vue3-sass-tailwind4-daisyui5.git <span v-if="projectName">{{ projectName }}</span><span v-else>{{ projectNameDefault }}</span></code></pre>
				<br>
				<pre class="opacity-50 text-bold"><code># change directory to your project</code></pre>
				<pre><code>cd <span v-if="projectName">{{ projectName }}</span><span v-else>{{ projectNameDefault }}</span></code></pre>
				<br>
				<pre class="opacity-50 text-bold"><code># remove the git history</code></pre>
				<pre><code>rm -rf .git</code></pre>
			</div>
		</div>
		<div class="flex flex-col flex-wrap items-start justify-center gap-4 w-full mb-10 md:flex-row">
			<div class="w-full min-w-[300px] md:w-[40%]">
				<h3 class="mt-0">
					<span class="badge badge-lg badge-success mr-2">2</span>
					Install dependencies
				</h3>
				<p class="mb-2 text-base-content/70">Enable Corepack and install the dependencies with <code>yarn install</code>.</p>
			</div>
			<div class="mockup-code text-md w-full flex-1">
				<pre class="opacity-50 text-bold"><code># install dependencies</code></pre>
				<pre><code>corepack enable</code></pre>
				<pre><code>yarn install</code></pre>
			</div>
		</div>
		<div class="flex flex-col flex-wrap items-start justify-center gap-4 w-full mb-10 md:flex-row">
			<div class="w-full min-w-[300px] md:w-[40%]">
				<h3 class="mt-0">
					<span class="badge badge-lg badge-success mr-2">3</span>
					Run the development server
				</h3>
				<p class="mb-2 text-base-content/70">Run the Vite development server with HMR.</p>
			</div>
			<div class="mockup-code text-md w-full flex-1">
				<pre class="opacity-50 text-bold"><code># run the development server</code></pre>
				<pre><code>yarn dev</code></pre>
			</div>
		</div>
		<div class="flex flex-col flex-wrap items-start justify-center gap-4 w-full mb-10 md:flex-row">
			<div class="w-full min-w-[300px] md:w-[40%]">
				<h3 class="mt-0">
					<span class="badge badge-lg badge-success mr-2">4</span>
					Start building your project
				</h3>
				<p class="mb-4 text-base-content/70">
					📌 Open your browser and go to <code>http://localhost:5173</code>.
				</p>
				<div class="mb-2 text-base-content/70">
					<span class="font-semibold">📌 To strip out this demo and keep the wiring, delete:</span>
					<ul class="[&_li]:my-1.5">
						<li><code>📁 src/components/ComponentsPreview/</code></li>
						<li><code>📁 src/components/Home/</code></li>
						<li><code>📄 src/views/PreviewView.vue</code> <span class="text-base-content/70 text-sm">&larr; and its <code>*.test.js</code> files</span></li>
					</ul>
					<span class="font-semibold">Then remove the <code>componentsPreview</code> route from <code>src/router/routes.js</code>, drop the links to it in the header and footer, and replace the contents of <code>src/views/HomeView.vue</code>.</span>
					<p class="mt-1">Routing, theming, the 404 page and the tests keep working - only the showcase goes away.</p>
				</div>
				<div class="mb-2 text-base-content/70">
					<span class="font-semibold">📌 Before you commit:</span>
					<ul class="[&_li]:my-1.5">
						<li><code>yarn lint</code> <span class="text-base-content/70 text-sm">&larr; ESLint, add <code>--fix</code> to apply the fixes</span></li>
						<li><code>yarn test</code> <span class="text-base-content/70 text-sm">&larr; Vitest, tests live next to the code as <code>*.test.js</code></span></li>
						<li><code>yarn build</code> <span class="text-base-content/70 text-sm">&larr; production build into <code>dist/</code></span></li>
					</ul>
				</div>
			</div>
			<div class="mockup-browser border-base-300 bg-base-100 border flex-1">
				<div class="mockup-browser-toolbar">
					<div class="input">http://localhost:5173</div>
				</div>
				<div class="grid place-content-center items-center border-t border-base-300 h-60 gap-4 p-8 bg-white/10">
					<div class="">🚀 Vite + Vue 3 + Sass + Tailwind 4 + DaisyUI 5</div>
					<div class="skeleton h-4 w-32 mx-auto"></div>
					<div class="skeleton h-4 w-40 mx-auto"></div>
					<div class="flex gap-2">
						<div class="skeleton h-8 w-8 mx-auto"></div>
						<div class="skeleton h-8 w-8 mx-auto"></div>
						<div class="skeleton h-8 w-8 mx-auto"></div>
						<div class="skeleton h-8 w-8 mx-auto"></div>
						<div class="skeleton h-8 w-8 mx-auto"></div>
						<div class="skeleton h-8 w-8 mx-auto"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
