import { beforeEach, describe, expect, it } from 'vitest';
import { createRouter, createMemoryHistory } from 'vue-router';
import routes from '@/router/routes.js';
import { APP_TITLE } from '@/config.js';

const createTestRouter = () => {
	const router = createRouter({ history: createMemoryHistory(), routes });
	router.afterEach((to) => {
		document.title = to.meta.title ? `${to.meta.title} | ${APP_TITLE}` : APP_TITLE;
	});
	return router;
};

let router;

beforeEach(async () => {
	router = createTestRouter();
	router.push('/');
	await router.isReady();
});

describe('routes', () => {
	it('resolves the home route', () => {
		expect(router.resolve('/').name).toBe('home');
	});

	it('resolves the components preview route', () => {
		expect(router.resolve('/preview').name).toBe('componentsPreview');
	});

	it('falls back to the 404 route for unknown paths', () => {
		expect(router.resolve('/does/not/exist').name).toBe('notFound');
	});

	it('gives every route a title', () => {
		expect(routes.every((route) => route.meta?.title)).toBe(true);
	});
});

describe('document title', () => {
	it('is derived from the route meta', async () => {
		await router.push('/preview');
		expect(document.title).toBe(`Components Preview | ${APP_TITLE}`);
	});

	it('is set for the 404 route as well', async () => {
		await router.push('/nope');
		expect(document.title).toBe(`404 Not Found | ${APP_TITLE}`);
	});
});
