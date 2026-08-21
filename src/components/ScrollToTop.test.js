import { afterEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ScrollToTop from '@/components/ScrollToTop.vue';

const scrollTo = (y) => {
	window.scrollY = y;
	window.dispatchEvent(new Event('scroll'));
};

afterEach(() => {
	window.scrollY = 0;
});

describe('ScrollToTop', () => {
	it('stays hidden near the top of the page', () => {
		const wrapper = mount(ScrollToTop);
		expect(wrapper.find('button').exists()).toBe(false);
	});

	it('appears once the page is scrolled down', async () => {
		const wrapper = mount(ScrollToTop);
		scrollTo(800);
		await wrapper.vm.$nextTick();
		expect(wrapper.find('button').exists()).toBe(true);
	});

	it('scrolls back to the top when clicked', async () => {
		const spy = vi.fn();
		window.scrollTo = spy;
		const wrapper = mount(ScrollToTop);
		scrollTo(800);
		await wrapper.vm.$nextTick();
		await wrapper.find('button').trigger('click');
		expect(spy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
	});

	it('removes its scroll listener on unmount', async () => {
		const remove = vi.spyOn(window, 'removeEventListener');
		mount(ScrollToTop).unmount();
		expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function));
		remove.mockRestore();
	});
});
