export default function blockStyles() {
	if (document.querySelector('.top-section')) {
		document.body.classList.add('index');
		document.querySelector('header').style.opacity = 1;
	} else {
		document.body.classList.add('inner');
		document.querySelector('header').style.opacity = 1;
	}
	if (document.querySelector('.top-section') && document.querySelector('.top-section__content')) {
		const container = document.querySelector('.top-section'),
			item = document.querySelector('.top-section__content');

		if (window.matchMedia('(max-width: 1200px)').matches) {
			container.style.backgroundSize = `auto ${
				container.offsetHeight - item.offsetHeight - 115
			}px`;
			document.querySelector('.top-section').classList.add('top-section--mobile');
		}
		if (window.matchMedia('(min-width: 1201px)').matches) {
			container.style.backgroundSize = '';
			document.querySelector('.top-section').classList.remove('top-section--mobile');
		}
	}

	if (document.querySelector('.top-section')) {
		document.body.classList.add('index');
	} else {
		document.body.classList.add('inner');
	}
	if (document.querySelector('.header__bl-2') && document.querySelector('.top-section__content')) {
		const bl1 = document.querySelector('.header__bl-2'),
			bl2 = document.querySelector('.top-section__content');

		if (window.matchMedia('(min-width: 1201px)').matches) {
			bl2.style.marginLeft = `${bl1.offsetLeft}px`;
			bl2.style.opacity = 1;
		}
		if (window.matchMedia('(max-width: 1200px)').matches) {
			bl2.style.marginLeft = '';
			bl2.style.opacity = '';
		}
	}
	if (document.querySelector('[data-title]')) {
		document.querySelectorAll('[data-title]').forEach((el) => {
			if (
				el.dataset.title === '' ||
				el.nextElementSibling === null ||
				el.nextElementSibling === undefined ||
				el.nextElementSibling.tagName === 'SPAN'
			) {
				return;
			} else {
				el.insertAdjacentHTML('afterend', `<span>${el.dataset.title}</span>`);
			}
		});
	}

	if (document.querySelector('#about-2')) {
		const info = document.querySelector('#about-2');

		info.style.paddingBottom = `${info.offsetWidth / 1.97}px`;
	}
}
