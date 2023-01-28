export default function scrollToAnchor() {
	if (document.querySelector('.scroll-to-anchor')) {
		document.addEventListener('click', function (e) {
			const link = e.target.closest('.scroll-to-anchor');

			if (link) {
				e.preventDefault();

				if (document.querySelector('.content-visible')) {
					const toggleBtn = document.querySelector('.toggle-btn'),
						toggleContent = document.querySelector('.toggle-wrapper > div'),
						overlay = document.querySelector('.overlay');

					toggleBtn.classList.remove('toggle-btn-style');
					toggleContent.classList.remove('content-visible'),
						overlay.classList.remove('overlay-visible');
					document.body.style.overflowY = '';
					document.body.style.paddingRight = '';
				}

				scrollToTarget(link.hash);
			}
		});

		if (location.hash !== '') {
			scrollToTarget(location.hash);
		}

		function scrollToTarget(id) {
			if (document.querySelector(id) !== null) {
				const target = document.querySelector(id),
					targetStyles = window.getComputedStyle(target);

				if (target !== null) {
					let pos = target.offsetTop;

					if (
						parseInt(targetStyles.paddingTop) === 0 &&
						target.classList.contains('style-1')
					) {
						pos = target.offsetTop - 120;

						window.scrollTo({
							top: pos,
							behavior: 'smooth',
						});
					} else {
						window.scrollTo({
							top: pos,
							behavior: 'smooth',
						});
					}
				}
			}
		}
	}
}
