import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HeaderNotifications from '@/components/HeaderNotifications.vue';

const markAllButton = (wrapper) =>
	wrapper.findAll('button').find((button) => button.text() === 'Mark all as read');

describe('HeaderNotifications', () => {
	it('badges the number of unread notifications', () => {
		const wrapper = mount(HeaderNotifications);
		expect(wrapper.find('.indicator-item').text()).toBe('2');
	});

	it('renders each notification title and detail on its own line', () => {
		const wrapper = mount(HeaderNotifications);
		const items = wrapper.findAll('li button');
		expect(items).toHaveLength(3);
		expect(items[0].classes()).toContain('flex-col');
		expect(items[0].text()).toContain('Build finished');
		expect(items[0].text()).toContain('Production build succeeded in 42s.');
	});

	it('clears the badge once everything is marked read', async () => {
		const wrapper = mount(HeaderNotifications);
		await markAllButton(wrapper).trigger('click');
		expect(wrapper.find('.indicator-item').exists()).toBe(false);
		expect(markAllButton(wrapper).attributes('disabled')).toBeDefined();
	});
});
