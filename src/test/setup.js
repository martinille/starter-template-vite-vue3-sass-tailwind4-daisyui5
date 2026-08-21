/**
 * Vitest setup file, loaded before every test run (see `test.setupFiles` in
 * vite.config.js).
 *
 * jsdom does not implement window.matchMedia, and the theme handling depends on
 * it, so it is stubbed here. Import `setPrefersDark` in a test to simulate the
 * user flipping their OS colour scheme.
 */
import { vi } from 'vitest';

export const matchMediaState = { matches: false, listeners: new Set() };

export const setPrefersDark = (matches) => {
	matchMediaState.matches = matches;
	matchMediaState.listeners.forEach((listener) => listener({ matches }));
};

window.matchMedia = vi.fn().mockImplementation((query) => ({
	get matches() {
		return matchMediaState.matches;
	},
	media: query,
	addEventListener: (_event, listener) => matchMediaState.listeners.add(listener),
	removeEventListener: (_event, listener) => matchMediaState.listeners.delete(listener),
	dispatchEvent: () => false,
}));
