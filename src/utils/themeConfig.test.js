import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { availableThemes, SYSTEM_THEME } from '@/utils/theme.js';

const daisyuiCss = readFileSync(
	resolve(process.cwd(), 'src/assets/styles/vendor/daisyui.css'),
	'utf8'
);

const indexHtml = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');

const baseColourFor = (themeName) => {
	const block = daisyuiCss.split('@plugin "daisyui/theme"').find((part) => part.includes(`name: "${themeName}"`));
	return block.match(/--color-base-100:\s*([^;]+);/)[1].trim();
};

const themeColourFor = (scheme) =>
	indexHtml.match(new RegExp(`<meta name="theme-color" content="([^"]+)" media="\\(prefers-color-scheme: ${scheme}\\)"`))[1];

const enabledDaisyuiThemes = daisyuiCss
	.match(/^\s*themes:\s*([^;]+);/m)[1]
	.split(',')
	.map((entry) => entry.trim().split(/\s+/)[0]);

const pickableThemes = availableThemes
	.map((theme) => theme.name)
	.filter((name) => name !== SYSTEM_THEME);

describe('theme configuration', () => {
	it('offers only themes DaisyUI actually builds', () => {
		expect(enabledDaisyuiThemes).toEqual(expect.arrayContaining(pickableThemes));
	});

	it('does not build themes the app never offers', () => {
		expect(pickableThemes).toEqual(expect.arrayContaining(enabledDaisyuiThemes));
	});

	it('has no duplicate entries', () => {
		expect(new Set(pickableThemes).size).toBe(pickableThemes.length);
	});
});

describe('browser theme-color', () => {
	it('declares one value per colour scheme', () => {
		expect(themeColourFor('light')).toMatch(/^#[0-9a-f]{6}$/i);
		expect(themeColourFor('dark')).toMatch(/^#[0-9a-f]{6}$/i);
	});

	it('still matches the base-100 colours it was derived from', () => {
		expect(baseColourFor('light')).toBe('oklch(100% 0 0)');
		expect(baseColourFor('dark')).toBe('oklch(30% 0.016 252.42)');
		expect(themeColourFor('light')).toBe('#ffffff');
		expect(themeColourFor('dark')).toBe('#282e36');
	});
});
