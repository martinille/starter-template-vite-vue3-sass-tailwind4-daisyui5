import { beforeEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import routes from '@/router/routes.js';

let router;

beforeEach(() => {
	router = createRouter({ history: createMemoryHistory(), routes });
});

const mountAt = async (path) => {
	router.push(path);
	await router.isReady();
	return mount(Breadcrumbs, { global: { plugins: [router] } });
};

describe('Breadcrumbs', () => {
	it('shows only "Home" on the home route', async () => {
		const wrapper = await mountAt('/');
		const items = wrapper.findAll('li');
		expect(items).toHaveLength(1);
		expect(items[0].text()).toBe('Home');
		expect(items[0].find('a').classes()).toContain('font-semibold');
	});

	it('appends the current route title', async () => {
		const wrapper = await mountAt('/preview');
		const items = wrapper.findAll('li');
		expect(items.map((item) => item.text())).toEqual(['Home', 'Components Preview']);
	});

	it('links the trailing crumb to the actual path, not the route pattern', async () => {
		const wrapper = await mountAt('/does/not/exist');
		const last = wrapper.findAll('li').at(-1);
		expect(last.find('a').attributes('href')).toBe('/does/not/exist');
	});
});
