import { ref } from 'vue';
import iconAutoDetect from '@/assets/icons/auto-detect.svg?raw';
import iconSun from '@/assets/icons/sun.svg?raw';
import iconMoon from '@/assets/icons/moon.svg?raw';

export class Themes {
	static #storageKey = 'theme';
	static defaultTheme = 'system'; // Automatická detekcia
	static availableThemes = [
		{name: 'system', icon: iconAutoDetect},
		{name: 'light', icon: iconSun},
		{name: 'dark', icon: iconMoon},
		{name: 'cupcake'},
		{name: 'retro'},
		{name: 'valentine'},
		{name: 'business'},
		{name: 'coffee'},
		{name: 'nord'},
	];
	static currentTheme = ref(Themes.detect());
	
	// Zistí, akú tému by mal použiť systém
	static detect() {
		const saved = localStorage.getItem(this.#storageKey) || this.defaultTheme;
		if (saved && this.availableThemes.map(theme => theme.name).includes(saved)) {
			return saved;
		}
		return this.prefersDark() ? 'dark' : 'light';
	}
	
	// Aplikuje danú tému a uloží ju do localStorage
	static apply(newTheme) {
		if (newTheme === this.defaultTheme) {
			// Uloží "system", ale vzhled na stránce nastaví podle preferencí
			localStorage.setItem(this.#storageKey, 'system');
			document.documentElement.setAttribute('data-theme', this.prefersDark() ? 'dark' : 'light');
		} else {
			// Uloží zvolenou čitelnou hodnotu, např. "dark" nebo "light"
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem(this.#storageKey, newTheme);
		}
		this.currentTheme.value = newTheme;
	}
	
	static prefersDark() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}
}
