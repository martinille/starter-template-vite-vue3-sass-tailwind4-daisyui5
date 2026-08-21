<script setup>
import { computed, ref } from 'vue';

const notifications = ref([
	{ id: 1, title: 'Build finished', detail: 'Production build succeeded in 42s.', time: '2m', read: false },
	{ id: 2, title: 'New comment', detail: 'Someone replied to your pull request.', time: '1h', read: false },
	{ id: 3, title: 'Weekly report', detail: 'Your traffic grew by 12% this week.', time: '2d', read: true },
]);

const unreadCount = computed(() => notifications.value.filter((item) => !item.read).length);

const markAllRead = () => {
	notifications.value = notifications.value.map((item) => ({ ...item, read: true }));
};
</script>

<template>
	<div class="dropdown dropdown-end">
		<div tabindex="0" role="button" class="btn btn-ghost btn-circle" aria-label="Notifications">
			<span class="indicator">
				<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
				</svg>
				<span v-if="unreadCount" class="badge badge-xs badge-primary indicator-item">{{ unreadCount }}</span>
			</span>
		</div>
		<div tabindex="0" class="dropdown-content bg-base-200 rounded-box z-20 mt-3 w-80 p-2 shadow-2xl ring-1 ring-base-300">
			<p class="px-2 py-1 text-xs font-semibold uppercase tracking-wide opacity-60">Notifications</p>
			<ul class="flex flex-col gap-1">
				<li v-for="notification in notifications" :key="notification.id">
					<button type="button" class="flex w-full flex-col items-start gap-1 rounded-btn px-2 py-2 text-left hover:bg-base-300">
						<span class="flex w-full items-center gap-2 text-sm font-semibold">
							<span
								class="size-2 shrink-0 rounded-full"
								:class="notification.read ? 'bg-transparent' : 'bg-primary'"
							></span>
							<span class="grow">{{ notification.title }}</span>
							<span class="shrink-0 text-xs font-normal opacity-50">{{ notification.time }}</span>
						</span>
						<span class="pl-4 text-xs leading-snug opacity-60">{{ notification.detail }}</span>
					</button>
				</li>
			</ul>
			<button
				type="button"
				class="btn btn-ghost btn-sm btn-block mt-2"
				:disabled="!unreadCount"
				@click="markAllRead"
			>
				Mark all as read
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
