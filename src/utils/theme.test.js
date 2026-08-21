import { beforeEach, describe, expect, it, vi } from 'vitest';
import { setPrefersDark } from '@/test/setup.js';

const loadTheme = () => {
	vi.resetModules();
	return import('@/utils/theme.js');
};

beforeEach(() => {
	localStorage.clear();
	document.documentElement.removeAttribute('data-theme');
	setPrefersDark(false);
});

describe('resolveTheme', () => {
	it('maps "system" to the OS preference', async () => {
		const { resolveTheme } = await loadTheme();
		setPrefersDark(true);
		expect(resolveTheme('system')).toBe('dark');
		setPrefersDark(false);
		expect(resolveTheme('system')).toBe('light');
	});

	it('passes an explicit theme through', async () => {
		const { resolveTheme } = await loadTheme();
		expect(resolveTheme('nord')).toBe('nord');
	});
});

describe('detectTheme', () => {
	it('falls back to "system" when nothing is stored', async () => {
		const { detectTheme } = await loadTheme();
		expect(detectTheme()).toBe('system');
	});

	it('falls back to "system" for an unknown stored value', async () => {
		localStorage.setItem('theme', 'not-a-theme');
		const { detectTheme } = await loadTheme();
		expect(detectTheme()).toBe('system');
	});

	it('restores a stored theme', async () => {
		localStorage.setItem('theme', 'coffee');
		const { currentTheme, detectTheme } = await loadTheme();
		expect(detectTheme()).toBe('coffee');
		expect(currentTheme.value).toBe('coffee');
	});
});

describe('setTheme', () => {
	it('stores the theme and writes it to the document', async () => {
		const { currentTheme, setTheme } = await loadTheme();
		setTheme('retro');
		expect(currentTheme.value).toBe('retro');
		expect(localStorage.getItem('theme')).toBe('retro');
		expect(document.documentElement.getAttribute('data-theme')).toBe('retro');
	});

	it('stores "system" but renders the resolved theme', async () => {
		const { currentTheme, setTheme } = await loadTheme();
		setPrefersDark(true);
		setTheme('system');
		expect(currentTheme.value).toBe('system');
		expect(localStorage.getItem('theme')).toBe('system');
		expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
	});

	it('ignores an unknown theme', async () => {
		const { currentTheme, setTheme } = await loadTheme();
		setTheme('nord');
		setTheme('not-a-theme');
		expect(currentTheme.value).toBe('nord');
		expect(document.documentElement.getAttribute('data-theme')).toBe('nord');
	});

	it('survives an unavailable localStorage', async () => {
		const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
			throw new Error('quota exceeded');
		});
		const { setTheme } = await loadTheme();
		expect(() => setTheme('business')).not.toThrow();
		expect(document.documentElement.getAttribute('data-theme')).toBe('business');
		setItem.mockRestore();
	});
});

describe('watchSystemTheme', () => {
	it('follows the OS preference while the theme is "system"', async () => {
		const { setTheme, watchSystemTheme } = await loadTheme();
		const stop = watchSystemTheme();
		setTheme('system');
		expect(document.documentElement.getAttribute('data-theme')).toBe('light');
		setPrefersDark(true);
		expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
		stop();
	});

	it('leaves an explicit theme untouched', async () => {
		const { setTheme, watchSystemTheme } = await loadTheme();
		const stop = watchSystemTheme();
		setTheme('valentine');
		setPrefersDark(true);
		expect(document.documentElement.getAttribute('data-theme')).toBe('valentine');
		stop();
	});

	it('stops listening once disposed', async () => {
		const { setTheme, watchSystemTheme } = await loadTheme();
		const stop = watchSystemTheme();
		setTheme('system');
		stop();
		setPrefersDark(true);
		expect(document.documentElement.getAttribute('data-theme')).toBe('light');
	});
});
