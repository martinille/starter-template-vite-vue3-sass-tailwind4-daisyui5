<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Chart from '@/components/ComponentsPreview/Chart.vue';
import Countdown from '@/components/ComponentsPreview/Countdown.vue';
import DataTable from '@/components/ComponentsPreview/DataTable.vue';
import EventScheduleCard from '@/components/ComponentsPreview/EventScheduleCard.vue';
import MockupCode from '@/components/ComponentsPreview/MockupCode.vue';
import OrderList from '@/components/ComponentsPreview/OrderList.vue';
import Revenue from '@/components/ComponentsPreview/Revenue.vue';
import Score from '@/components/ComponentsPreview/Score.vue';
import StatsOverview from '@/components/ComponentsPreview/StatsOverview.vue';
import Timeline from '@/components/ComponentsPreview/Timeline.vue';
import AccountRegistrationForm from '@/components/ComponentsPreview/AccountRegistrationForm.vue';
import PriceRange from '@/components/ComponentsPreview/PriceRange.vue';
import ProductFilterCard from '@/components/ComponentsPreview/ProductFilterCard.vue';
import SearchBox from '@/components/ComponentsPreview/SearchBox.vue';
import WritePostForm from '@/components/ComponentsPreview/WritePostForm.vue';
import Accordion from '@/components/ComponentsPreview/Accordion.vue';
import AdminPanelNav from '@/components/ComponentsPreview/AdminPanelNav.vue';
import Pagination from '@/components/ComponentsPreview/Pagination.vue';
import Tabs from '@/components/ComponentsPreview/Tabs.vue';
import Alerts from '@/components/ComponentsPreview/Alerts.vue';
import EmptyState from '@/components/ComponentsPreview/EmptyState.vue';
import ModalDialog from '@/components/ComponentsPreview/ModalDialog.vue';
import Notifications from '@/components/ComponentsPreview/Notifications.vue';
import ProductCard from '@/components/ComponentsPreview/ProductCard.vue';
import SubscriptionPlanCard from '@/components/ComponentsPreview/SubscriptionPlanCard.vue';
import Avatars from '@/components/ComponentsPreview/Avatars.vue';
import ChatBubbles from '@/components/ComponentsPreview/ChatBubbles.vue';
import MusicPlayer from '@/components/ComponentsPreview/MusicPlayer.vue';

const components = [
	{ title: 'Chart', category: 'Data display', component: Chart },
	{ title: 'Countdown', category: 'Data display', component: Countdown },
	{ title: 'Data Table', category: 'Data display', component: DataTable, wide: true },
	{ title: 'Event Schedule Card', category: 'Data display', component: EventScheduleCard },
	{ title: 'Mockup Code', category: 'Data display', component: MockupCode },
	{ title: 'Order List', category: 'Data display', component: OrderList },
	{ title: 'Revenue', category: 'Data display', component: Revenue },
	{ title: 'Score', category: 'Data display', component: Score },
	{ title: 'Stats Overview', category: 'Data display', component: StatsOverview },
	{ title: 'Timeline', category: 'Data display', component: Timeline },
	{ title: 'Account Registration Form', category: 'Forms', component: AccountRegistrationForm },
	{ title: 'Price Range', category: 'Forms', component: PriceRange },
	{ title: 'Product Filter Card', category: 'Forms', component: ProductFilterCard },
	{ title: 'Search Box', category: 'Forms', component: SearchBox },
	{ title: 'Write Post Form', category: 'Forms', component: WritePostForm },
	{ title: 'Accordion', category: 'Navigation', component: Accordion },
	{ title: 'Admin Panel Nav', category: 'Navigation', component: AdminPanelNav },
	{ title: 'Pagination', category: 'Navigation', component: Pagination },
	{ title: 'Tabs', category: 'Navigation', component: Tabs },
	{ title: 'Alerts', category: 'Feedback', component: Alerts },
	{ title: 'Empty State', category: 'Feedback', component: EmptyState },
	{ title: 'Modal Dialog', category: 'Feedback', component: ModalDialog },
	{ title: 'Notifications', category: 'Feedback', component: Notifications },
	{ title: 'Product Card', category: 'Commerce', component: ProductCard },
	{ title: 'Subscription Plan Card', category: 'Commerce', component: SubscriptionPlanCard },
	{ title: 'Avatars', category: 'Social & media', component: Avatars },
	{ title: 'Chat Bubbles', category: 'Social & media', component: ChatBubbles },
	{ title: 'Music Player', category: 'Social & media', component: MusicPlayer },
];

const ALL_CATEGORIES = 'All';
const categories = [ALL_CATEGORIES, ...new Set(components.map((entry) => entry.category))];

const route = useRoute();
const router = useRouter();

const search = ref(String(route.query.q ?? ''));
const activeCategory = ref(ALL_CATEGORIES);

watch(() => route.query.q, (value) => {
	search.value = String(value ?? '');
});

watch(search, (value) => {
	router.replace({ query: value ? { q: value } : {} });
});

const countFor = (category) =>
	category === ALL_CATEGORIES
		? components.length
		: components.filter((entry) => entry.category === category).length;

const visibleComponents = computed(() => {
	const term = search.value.trim().toLowerCase();
	return components.filter((entry) => {
		const matchesCategory =
			activeCategory.value === ALL_CATEGORIES || entry.category === activeCategory.value;
		const matchesTerm =
			!term ||
			entry.title.toLowerCase().includes(term) ||
			entry.category.toLowerCase().includes(term);
		return matchesCategory && matchesTerm;
	});
});

const reset = () => {
	search.value = '';
	activeCategory.value = ALL_CATEGORIES;
};
</script>

<template>
	<div class="container-center">
		<h1 class="text-center">Components Preview</h1>
		<p class="text-center text-base text-base-content/70">Components built with DaisyUI and Tailwind CSS. Search or filter by category.</p>
		<p class="text-center text-base text-base-content/70 mb-8">You can find the source code in the <code>📁 src/components/ComponentsPreview</code> directory.</p>

		<div class="flex flex-col gap-4 items-center mb-4">
			<label class="input input-bordered w-full max-w-md">
				<span class="sr-only">Search components</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="size-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input v-model="search" type="search" placeholder="Search components…" />
			</label>

			<div role="tablist" class="tabs tabs-box">
				<button
					v-for="category in categories"
					:key="category"
					type="button"
					role="tab"
					class="tab"
					:class="{ 'tab-active': activeCategory === category }"
					:aria-selected="activeCategory === category"
					@click="activeCategory = category"
				>
					{{ category }}
					<span class="badge badge-xs badge-ghost ml-2">{{ countFor(category) }}</span>
				</button>
			</div>
		</div>

		<p class="text-center text-sm text-base-content/60 mb-8" aria-live="polite">
			Showing {{ visibleComponents.length }} of {{ components.length }} components
		</p>

		<div v-if="visibleComponents.length" class="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<article
				v-for="entry in visibleComponents"
				:key="entry.title"
				class="card card-border border-base-300 bg-base-300 p-4 shadow-sm transition hover:shadow-lg"
				:class="{ 'md:col-span-2': entry.wide }"
			>
				<div class="flex items-baseline justify-between gap-2 mb-4">
					<h3 class="m-0">{{ entry.title }}</h3>
					<span class="badge badge-sm badge-ghost shrink-0">{{ entry.category }}</span>
				</div>
				<div class="flex place-content-center">
					<component :is="entry.component" />
				</div>
			</article>
		</div>

		<div v-else class="text-center py-16">
			<p class="text-5xl mb-4">🔍</p>
			<h2>No components match your search</h2>
			<p class="text-base-content/70 mb-6">Try a different term, or clear the filters.</p>
			<button type="button" class="btn btn-primary" @click="reset">Clear filters</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
