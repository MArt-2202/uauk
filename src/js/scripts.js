'use strict';

import debounce from './modules/debounce';
import blocksStyles from './modules/blocksStyles';
import blockPosition from './modules/blockPosition';
import tabs from './modules/tabs';
import sliders from './modules/sliders';
import scrollToAnchor from './modules/scrollToAnchor';
import modal from './modules/modal';
import joinForm from './modules/joinForm';
import toggleContent from './modules/toggleContent';
import svgMap from './modules/svgMap';

if ('ontouchstart' in document.documentElement) {
	document.body.classList.add('touchdevice');
}

function isMobile(agent) {
	if (agent === void 0) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent);
}

if (isMobile()) {
	document.body.classList.remove('desktop-user-agent');
	document.body.classList.add('mobile-user-agent');
} else {
	document.body.classList.remove('mobile-user-agent');
	document.body.classList.add('desktop-user-agent');
}

document.addEventListener('DOMContentLoaded', () => {
	tabs({});
	sliders();
	scrollToAnchor();
	modal();
	joinForm();
	toggleContent();
	svgMap({
		container: '#top-section__map',
		width: 1237,
		height: 976,
		svgClass: 'top-section__img top-section__img-2',
		dataKey: 'svgData2',
		animatedTag: '.top-section__img-2',
		animatedClass: ['show', 'show-markers'],
	});
	svgMap({
		container: '#top-section__map',
		width: 1237,
		height: 976,
		svgClass: 'top-section__img top-section__img-1',
		dataKey: 'svgData1',
		animatedTag: false,
		animatedClass: false,
	});
}); // END READY

window.addEventListener('resize', () => {
	debounce(function () {
		blocksStyles();
		blockPosition();
	}, 200);
});

window.addEventListener('load', () => {
	debounce(function () {
		blocksStyles();
		blockPosition();
	}, 200);
});

window.addEventListener('scroll', (e) => {
	if (document.querySelector('.index header')) {
		if (scrollY > 10) {
			document.querySelector('.index header').classList.add('header-style');
		} else {
			document.querySelector('.index header').classList.remove('header-style');
		}
	}
});
