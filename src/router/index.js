import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes.js';
import { APP_TITLE } from '@/config.js';

const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname;

const router = createRouter({
	history: createWebHistory(basePath),
	routes,
	scrollBehavior: (to, from, savedPosition) => savedPosition ?? { top: 0 },
});

router.afterEach((to) => {
	document.title = to.meta.title ? `${to.meta.title} | ${APP_TITLE}` : APP_TITLE;
});

export default router;
