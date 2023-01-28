export default function modal() {
	function clearModal() {
		if (document.querySelector('#modal__message')) {
			document.querySelector('#modal__message').classList.add('dn');
			document.querySelector('#modal__message').classList.remove('modal__message--show');
		}
		if (document.querySelector('.modal__content')) {
			document.querySelectorAll('.modal__content').forEach((el) => {
				if (el.classList.contains('hidden')) {
					el.classList.remove('hidden');
					el.style.height = '';
				}
			});
		}
	}
	if (document.querySelector('.modal-btn')) {
		document.querySelectorAll('.modal-btn').forEach((el) => {
			el.addEventListener('click', function (e) {
				e.preventDefault();
				if (el.dataset.modalBtn !== '') {
					const targetModal = document.querySelector(`[data-modal="${el.dataset.modalBtn}"]`);

					targetModal.classList.remove('dn');
					setTimeout(() => {
						targetModal.classList.add('show');
					}, 50);

					document.body.style.paddingRight =
						window.innerWidth - document.documentElement.clientWidth + 'px';
					document.body.style.overflowY = 'hidden';
				}
			});
		});
	}

	if (document.querySelector('.modal-overlay')) {
		document.querySelectorAll('.modal-overlay').forEach((el) => {
			el.addEventListener('click', function (e) {
				const target = e.target;

				if (!target.closest('.modal__content') || target.closest('.modal__close')) {
					el.classList.remove('show');
					setTimeout(() => {
						el.classList.add('dn');
						clearModal();
					}, 200);

					document.body.style.overflowY = '';
					document.body.style.paddingRight = '';
				}
			});
		});
	}
}
// valid format is +(code) your number
