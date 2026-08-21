import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { availableThemes, SYSTEM_THEME } from '@/utils/theme.js';

const daisyuiCss = readFileSync(
	resolve(process.cwd(), 'src/assets/styles/vendor/daisyui.css'),
	'utf8'
);

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
