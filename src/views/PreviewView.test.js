import { beforeEach, describe, expect, it } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import routes from '@/router/routes.js';
import PreviewView from '@/views/PreviewView.vue';

let router;

const mountAt = async (path) => {
	router = createRouter({ history: createMemoryHistory(), routes });
	router.push(path);
	await router.isReady();
	return mount(PreviewView, { global: { plugins: [router] } });
};

const cardTitles = (wrapper) => wrapper.findAll('article > div > h3').map((heading) => heading.text());

beforeEach(() => {
	router = undefined;
});

describe('PreviewView', () => {
	it('lists every component by default', async () => {
		const wrapper = await mountAt('/preview');
		expect(cardTitles(wrapper).length).toBe(28);
	});

	it('picks up the search term from the route query', async () => {
		const wrapper = await mountAt('/preview?q=chart');
		expect(cardTitles(wrapper)).toEqual(['Chart']);
	});

	it('filters as the user types and reflects it in the URL', async () => {
		const wrapper = await mountAt('/preview');
		await wrapper.find('input[type="search"]').setValue('table');
		await flushPromises();
		expect(cardTitles(wrapper)).toEqual(['Data Table']);
		expect(router.currentRoute.value.query.q).toBe('table');
	});

	it('filters by category', async () => {
		const wrapper = await mountAt('/preview');
		const commerce = wrapper.findAll('[role="tab"]').find((tab) => tab.text().startsWith('Commerce'));
		await commerce.trigger('click');
		expect(cardTitles(wrapper)).toEqual(['Product Card', 'Subscription Plan Card']);
	});

	it('shows an empty state and can clear the filters', async () => {
		const wrapper = await mountAt('/preview');
		await wrapper.find('input[type="search"]').setValue('nothing matches this');
		expect(cardTitles(wrapper)).toEqual([]);
		expect(wrapper.text()).toContain('No components match your search');

		await wrapper.find('.btn-primary').trigger('click');
		await flushPromises();
		expect(cardTitles(wrapper).length).toBe(28);
		expect(router.currentRoute.value.query.q).toBeUndefined();
	});

	it('assigns every component to a category', async () => {
		const wrapper = await mountAt('/preview');
		const badges = wrapper.findAll('article > div > .badge').map((badge) => badge.text());
		expect(badges).toHaveLength(28);
		expect(new Set(badges).size).toBeGreaterThan(1);
	});
});
