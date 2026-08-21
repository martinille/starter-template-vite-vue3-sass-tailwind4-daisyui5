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
