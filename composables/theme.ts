import { Ref } from 'vue';
import { themes } from '~/exports/themes';
import { useCurrentTheme } from './states';

export function setTheme(theme?: string) {
	if (process.client) {
		const currentTheme = useCurrentTheme();
		const ls = localStorage.getItem('theme');

		if (themes.includes(theme)) {
			localStorage.setItem('theme', theme);
			currentTheme.value = theme;
		} else if (themes.includes(ls)) return (currentTheme.value = ls);
		else {
			localStorage.setItem('theme', 'dracula');
			currentTheme.value = 'dracula';
		}
	}
}

export function themeInit() {
	if (process.client) {
		const ls = localStorage.getItem('theme');

		if (themes.includes(ls)) return ls;
		else {
			localStorage.setItem('theme', 'dracula');
			return 'dracula';
		}
	} else return 'dracula';
}
