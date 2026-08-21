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

	it('offers a skip link that targets the main landmark', async () => {
		const wrapper = await mountWithRouter(App);
		const skipLink = wrapper.find('a[href="#main"]');
		expect(skipLink.exists()).toBe(true);
		expect(skipLink.classes()).toContain('sr-only');
		expect(wrapper.find('main').attributes('id')).toBe('main');
	});

	it('renders the 404 view', async () => {
		const wrapper = await mountWithRouter(NotFoundView, '/nope');
		expect(wrapper.text()).toContain('404');
	});

	it('renders every preview component without errors', async () => {
		const wrapper = await mountWithRouter(PreviewView, '/preview');
		expect(wrapper.findAll('.card').length).toBeGreaterThan(20);
	});

	it('serves every image from the project, not from a third-party CDN', async () => {
		const wrapper = await mountWithRouter(PreviewView, '/preview');
		const remote = wrapper.findAll('img')
			.map((img) => img.attributes('src'))
			.filter((src) => /^https?:\/\//.test(src));
		expect(remote).toEqual([]);
	});

	it('gives every form control an accessible name', async () => {
		const wrapper = await mountWithRouter(PreviewView, '/preview');
		const unnamed = wrapper.findAll('input, textarea, select').filter((control) => {
			const el = control.element;
			if (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')) return false;
			if (el.id && wrapper.find(`label[for="${el.id}"]`).exists()) return false;
			return !el.closest('label');
		});
		expect(unnamed).toHaveLength(0);
	});

	it('gives every image an alt attribute', async () => {
		const wrapper = await mountWithRouter(PreviewView, '/preview');
		const withoutAlt = wrapper.findAll('img').filter((img) => img.attributes('alt') === undefined);
		expect(withoutAlt).toHaveLength(0);
	});
});
