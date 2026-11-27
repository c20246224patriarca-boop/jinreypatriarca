const revealElements = document.querySelectorAll('[data-reveal]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && revealElements.length > 0 && !prefersReducedMotion) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.12 },
	);

	document.documentElement.classList.add('has-scroll-reveal');
	revealElements.forEach((element) => observer.observe(element));
}
