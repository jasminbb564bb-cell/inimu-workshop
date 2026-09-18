const navigation = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.site-nav__toggle');
const navigationLinks = document.querySelectorAll('.site-nav__list a');

if (navigation && menuToggle) {
	menuToggle.setAttribute('aria-expanded', 'false');

	menuToggle.addEventListener('click', () => {
		const isOpen = navigation.classList.toggle('is-open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
	});

	navigationLinks.forEach((link) => {
		link.addEventListener('click', () => {
			navigation.classList.remove('is-open');
			menuToggle.setAttribute('aria-expanded', 'false');
			menuToggle.setAttribute('aria-label', 'メニューを開く');
		});
	});
}
