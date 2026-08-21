import { beforeEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ThemeControllerMini from '@/components/ThemeControllerMini.vue';
import { availableThemes, currentTheme, setTheme } from '@/utils/theme.js';

beforeEach(() => {
	localStorage.clear();
	document.documentElement.removeAttribute('data-theme');
	setTheme('light');
});

describe('ThemeControllerMini', () => {
	it('renders every available theme', () => {
		const wrapper = mount(ThemeControllerMini);
		expect(wrapper.findAll('input[type="radio"]')).toHaveLength(availableThemes.length);
	});

	it('applies the theme picked by the user', async () => {
		const wrapper = mount(ThemeControllerMini);
		await wrapper.find('input[aria-label="nord"]').trigger('change');
		expect(currentTheme.value).toBe('nord');
		expect(document.documentElement.getAttribute('data-theme')).toBe('nord');
	});

	it('marks the active theme', async () => {
		const wrapper = mount(ThemeControllerMini);
		await wrapper.find('input[aria-label="retro"]').trigger('change');
		await wrapper.vm.$nextTick();
		const active = wrapper.findAll('label').filter((label) => label.classes().includes('btn-active'));
		expect(active).toHaveLength(1);
		expect(active[0].text()).toContain('retro');
	});

	it('keeps the theme radios reachable by keyboard', () => {
		const wrapper = mount(ThemeControllerMini);
		expect(wrapper.findAll('.theme-controller.hidden')).toHaveLength(0);
	});
});
