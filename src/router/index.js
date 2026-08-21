/**
 * Vue Router setup.
 * Docs: https://router.vuejs.org/
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes.js';
import { APP_TITLE } from '@/config.js';

/**
 * BASE_URL is "/" locally, but the GitHub Pages workflow sets it to the full
 * Pages URL, so take just the path part - that is what the history mode needs.
 */
const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname;

const router = createRouter({
	history: createWebHistory(basePath),
	routes,
	// Start at the top on a new page, but restore the position on back/forward.
	scrollBehavior: (to, from, savedPosition) => savedPosition ?? { top: 0 },
});

router.afterEach((to) => {
	document.title = to.meta.title ? `${to.meta.title} | ${APP_TITLE}` : APP_TITLE;
});

export default router;
