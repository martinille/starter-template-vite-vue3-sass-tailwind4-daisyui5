<script setup>
import { computed, ref } from 'vue';

const notifications = ref([
	{ id: 1, title: 'Build finished', detail: 'Production build succeeded in 42s.', read: false },
	{ id: 2, title: 'New comment', detail: 'Anakin replied to your pull request.', read: false },
	{ id: 3, title: 'Weekly report', detail: 'Your traffic grew by 12% this week.', read: true },
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
			<ul class="menu menu-sm w-full p-0">
				<li v-for="notification in notifications" :key="notification.id">
					<a class="flex-col items-start gap-0.5">
						<span class="flex items-center gap-2 font-semibold">
							<span v-if="!notification.read" class="status status-primary" aria-label="Unread"></span>
							{{ notification.title }}
						</span>
						<span class="text-xs opacity-60">{{ notification.detail }}</span>
					</a>
				</li>
			</ul>
			<button
				type="button"
				class="btn btn-ghost btn-sm btn-block mt-1"
				:disabled="!unreadCount"
				@click="markAllRead"
			>
				Mark all as read
			</button>
		</div>
	</div>
</template>
