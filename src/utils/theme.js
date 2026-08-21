import { ref } from 'vue';
import iconAutoDetect from '@/assets/icons/auto-detect.svg?raw';
import iconSun from '@/assets/icons/sun.svg?raw';
import iconMoon from '@/assets/icons/moon.svg?raw';

const STORAGE_KEY = 'theme';

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

export const resolveTheme = (name) =>
	name === SYSTEM_THEME ? (prefersDark() ? 'dark' : 'light') : name;

export const detectTheme = () => {
	const saved = readStoredTheme();
	return isKnownTheme(saved) ? saved : SYSTEM_THEME;
};

export const currentTheme = ref(detectTheme());

export const setTheme = (name) => {
	if (!isKnownTheme(name)) return;
	currentTheme.value = name;
	storeTheme(name);
	document.documentElement.setAttribute('data-theme', resolveTheme(name));
};

export const watchSystemTheme = () => {
	const query = window.matchMedia('(prefers-color-scheme: dark)');
	const sync = () => {
		if (currentTheme.value === SYSTEM_THEME) setTheme(SYSTEM_THEME);
	};
	query.addEventListener('change', sync);
	return () => query.removeEventListener('change', sync);
};
