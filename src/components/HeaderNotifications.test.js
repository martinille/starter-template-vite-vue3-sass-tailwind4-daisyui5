import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HeaderNotifications from '@/components/HeaderNotifications.vue';

describe('HeaderNotifications', () => {
	it('badges the number of unread notifications', () => {
		const wrapper = mount(HeaderNotifications);
		expect(wrapper.find('.indicator-item').text()).toBe('2');
	});

	it('clears the badge once everything is marked read', async () => {
		const wrapper = mount(HeaderNotifications);
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('.indicator-item').exists()).toBe(false);
		expect(wrapper.find('button').attributes('disabled')).toBeDefined();
	});
});
