/**
 * Route definitions.
 *
 * `meta.title` is used twice: for the document <title> (see index.js) and for
 * the breadcrumb label (see src/components/Breadcrumbs.vue). Give every route
 * one.
 *
 * Docs: https://router.vuejs.org/guide/essentials/named-routes
 */
import HomeView from '@/views/HomeView.vue';

export default [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: { title: 'Home' },
	},
	{
		path: '/preview',
		name: 'componentsPreview',
		// Lazy-loaded: this view lands in its own chunk instead of the main bundle.
		component: () => import('@/views/PreviewView.vue'),
		meta: { title: 'Components Preview' },
	},
	{
		// Catch-all fallback, must stay last.
		path: '/:pathMatch(.*)*',
		name: 'notFound',
		component: () => import('@/views/NotFoundView.vue'),
		meta: { title: '404 Not Found' },
	},
];
