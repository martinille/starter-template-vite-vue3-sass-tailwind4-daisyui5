import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import routes from '@/router/routes.js';
import App from '@/App.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import PreviewView from '@/views/PreviewView.vue';

const mountWithRouter = async (component, path = '/') => {
	const router = createRouter({ history: createMemoryHistory(), routes });
	router.push(path);
	await router.isReady();
	return mount(component, { global: { plugins: [router] } });
};

describe('views', () => {
	it('renders the app shell with header, main and footer', async () => {
		const wrapper = await mountWithRouter(App);
		expect(wrapper.find('header').exists()).toBe(true);
		expect(wrapper.find('main').exists()).toBe(true);
		expect(wrapper.find('footer').exists()).toBe(true);
	});

	it('renders the 404 view', async () => {
		const wrapper = await mountWithRouter(NotFoundView, '/nope');
		expect(wrapper.text()).toContain('404');
	});

	it('renders every preview component without errors', async () => {
		const wrapper = await mountWithRouter(PreviewView, '/preview');
		expect(wrapper.findAll('.card').length).toBeGreaterThan(20);
	});
});
