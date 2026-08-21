/**
 * Theme handling.
 *
 * Single source of truth for the theme the app can switch to. The selection is
 * stored in localStorage and applied as <html data-theme="...">, which is how
 * DaisyUI picks a theme up.
 *
 * To add a theme:
 *   1. add it to `availableThemes` below (the optional `icon` is a raw SVG),
 *   2. enable it in src/assets/styles/vendor/daisyui.css (`themes:` list),
 *   3. optionally add a `@custom-variant` for it in
 *      src/assets/styles/vendor/tailwind.css if you want a `my-theme:` prefix.
 *
 * DaisyUI themes: https://daisyui.com/docs/themes/
 */
import { ref } from 'vue';
import iconAutoDetect from '@/assets/icons/auto-detect.svg?raw';
import iconSun from '@/assets/icons/sun.svg?raw';
import iconMoon from '@/assets/icons/moon.svg?raw';

const STORAGE_KEY = 'theme';

/** Not a DaisyUI theme - a marker meaning "follow the operating system". */
export const SYSTEM_THEME = 'system';

export const availableThemes = [
	{ name: SYSTEM_THEME, icon: iconAutoDetect },
	{ name: 'light', icon: iconSun },
	{ name: 'dark', icon: iconMoon },
	{ name: 'cupcake' },
	{ name: 'retro' },
	{ name: 'valentine' },
	{ name: 'business' },
	{ name: 'coffee' },
	{ name: 'nord' },
];

const isKnownTheme = (name) => availableThemes.some((theme) => theme.name === name);

const readStoredTheme = () => {
	try {
		return localStorage.getItem(STORAGE_KEY);
	} catch {
		return null;
	}
};

const storeTheme = (name) => {
	try {
		localStorage.setItem(STORAGE_KEY, name);
	} catch {
	}
};

export const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

/** Turns the stored value into a theme DaisyUI actually knows. */
export const resolveTheme = (name) =>
	name === SYSTEM_THEME ? (prefersDark() ? 'dark' : 'light') : name;

/** Stored theme, or "system" when nothing (or something unknown) is stored. */
export const detectTheme = () => {
	const saved = readStoredTheme();
	return isKnownTheme(saved) ? saved : SYSTEM_THEME;
};

/** The theme the user picked - reactive, use it directly in templates. */
export const currentTheme = ref(detectTheme());

export const setTheme = (name) => {
	if (!isKnownTheme(name)) return;
	currentTheme.value = name;
	storeTheme(name);
	document.documentElement.setAttribute('data-theme', resolveTheme(name));
};

/**
 * Keeps the page in sync with the OS colour scheme while "system" is selected.
 * Returns a function that stops listening again.
 */
export const watchSystemTheme = () => {
	const query = window.matchMedia('(prefers-color-scheme: dark)');
	const sync = () => {
		if (currentTheme.value === SYSTEM_THEME) setTheme(SYSTEM_THEME);
	};
	query.addEventListener('change', sync);
	return () => query.removeEventListener('change', sync);
};

/**
 * Called once from src/main.js. The inline script in index.html has already
 * painted a theme; this re-applies the detected one (normalising anything stale
 * in localStorage) and starts following the OS.
 */
export const initTheme = () => {
	setTheme(detectTheme());
	return watchSystemTheme();
};
