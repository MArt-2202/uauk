export default function joinForm() {
	if (document.querySelector('#join-form')) {
		const joinForm = document.querySelector('#join-form'),
			sendData = {},
			formData = new FormData(),
			url = '/api/func/to_cart';
		// url = 'https://jsonplaceholder.typicode.com/users/1/posts';

		if (document.querySelector('#join-form__submit')) {
			const joinFormSubmit = document.querySelector('#join-form__submit');

			joinFormSubmit.addEventListener('click', function (e) {
				if (joinForm.querySelector('[required]')) {
					joinForm.classList.add('has-required');
				}
			});
		}

		joinForm.addEventListener('submit', function (e) {
			e.preventDefault();

			if (document.querySelector('#join-form [data-key]')) {
				document.querySelectorAll('#join-form [data-key]').forEach((el) => {
					if (el.dataset.key !== '') {
						sendData[el.dataset.key] = el.value;
					}
				});
			}

			formData.append('json', JSON.stringify(sendData));

			// console.log(sendData, formData);

			fetch(url, {
				method: 'POST',
				body: formData,
				// headers: {
				// 	'Content-type': 'application/json; charset=UTF-8',
				// },
			})
				.then((response) => response.json())
				.then((data) => {
					document.body.style.overflowY = '';
					document.body.style.paddingRight = '';

					document.querySelector('.modal-overlay.show').classList.add('dn');
					document.querySelector('.modal-overlay.show').classList.remove('show');

					joinForm.classList.remove('has-required');

					if (joinForm.querySelector('input')) {
						joinForm.querySelectorAll('input').forEach((el) => {
							if (el.type !== 'RADIO' || el.type !== 'CHECKBOX') {
								el.value = '';
							}
						});
					}
				})
				.catch((error) => {
					console.error(error);
				});
		});
	}
}
