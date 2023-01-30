import Swiper, { Navigation } from 'swiper';

export default function sliders() {
	if (
		document.querySelector('.persons__slider') &&
		document.querySelector('.persons__slider .swiper-wrapper').children !== 'undefined' &&
		document.querySelector('.persons__slider .swiper-wrapper').children.length &&
		document.querySelector('.persons__slider-wrapper .slider-btn--next') &&
		document.querySelector('.persons__slider-wrapper .slider-btn--prev')
	) {
		new Swiper('.persons__slider', {
			modules: [Navigation],
			on: {
				init() {
					if (document.querySelector('.persons__slider-wrapper')) {
						document.querySelector('.persons__slider-wrapper').classList.remove('style-3');
					}
				},
			},
			autoHeight: true,
			loop: true,
			slidesPerView: 4,
			spaceBetween: 50,
			forceToAxis: true,
			navigation: {
				nextEl: '.persons__slider-wrapper .slider-btn--next',
				prevEl: '.persons__slider-wrapper .slider-btn--prev',
			},
			breakpoints: {
				1230: { slidesPerView: 4, spaceBetween: 50 },
				1024: { slidesPerView: 4, spaceBetween: 40 },
				768: { slidesPerView: 3, spaceBetween: 30 },
				576: { slidesPerView: 2, spaceBetween: 20 },
				300: { slidesPerView: 1, spaceBetween: 15 },
			},
		});
	} else if (document.querySelector('.persons__slider-wrapper')) {
		document.querySelector('.persons__slider-wrapper').classList.remove('style-3');

		if (document.querySelector('.persons__slider-wrapper .slider-btn--next')) {
			document.querySelector('.persons__slider-wrapper .slider-btn--next').remove();
		}
		if (document.querySelector('.persons__slider-wrapper .slider-btn--prev')) {
			document.querySelector('.persons__slider-wrapper .slider-btn--prev').remove();
		}
	}
}
