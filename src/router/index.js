import { createWebHistory, createRouter } from 'vue-router';
import routes from './routes';

const url = new URL(import.meta.env.BASE_URL, window.location.origin);
const router = createRouter({
        history: createWebHistory(url.pathname),
	routes: routes,
});

export default router;
