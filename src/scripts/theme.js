const themeToggle = document.querySelector('[data-theme-toggle]');

if (themeToggle) {
	const updateThemeToggle = () => {
		const isLight = document.documentElement.dataset.theme === 'light';
		themeToggle.textContent = isLight ? 'Dark mode' : 'Light mode';
		themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
		themeToggle.setAttribute('aria-pressed', String(isLight));
	};

	updateThemeToggle();

	themeToggle.addEventListener('click', () => {
		const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
		document.documentElement.dataset.theme = nextTheme;
		localStorage.setItem('site-theme', nextTheme);
		updateThemeToggle();
	});
}
