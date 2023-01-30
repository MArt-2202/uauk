export default function svgMap({
	container,
	width,
	height,
	svgClass,
	dataKey,
	animatedTag,
	animatedClass,
}) {
	let isRender = undefined;

	if (
		document.querySelector('#top-section') &&
		document.querySelector('#top-section').dataset.svg
	) {
		if (window.matchMedia('(min-width: 1201px)').matches) {
			const url = document.querySelector('#top-section').dataset.svg;

			fetch(url)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					data.forEach((el) => {
						isRender = Object.keys(el).find((key) => key === dataKey);

						if (isRender && document.querySelector(container)) {
							const xmlns = 'http://www.w3.org/2000/svg',
								svg = document.createElementNS(xmlns, 'svg'),
								defs = document.createElementNS(xmlns, 'defs');

							el[dataKey].forEach((item) => {
								const path = document.createElementNS(xmlns, 'path');

								if (item.id !== undefined) {
									path.setAttributeNS(null, 'id', item.id);
								}
								if (item.fill !== undefined) {
									path.setAttributeNS(null, 'fill', item.fill);
								}
								if (item.d !== undefined) {
									path.setAttributeNS(null, 'd', item.d);
								}
								if (item.addClass !== undefined) {
									path.setAttributeNS(null, 'class', item.addClass);
								}
								if (item.stroke !== undefined) {
									path.setAttributeNS(null, 'stroke', item.stroke);
								}

								svg.append(path);

								if (item.linearGradient !== undefined) {
									const linearGradientId = item.fill.replace(/(\#)|(url)|(\(|\))/g, '');

									defs.insertAdjacentHTML(
										'beforeend',
										`
						<lineargradient
							id='${linearGradientId}'
							x1='${item.linearGradient.x1}'
							x2='${item.linearGradient.x2}'
							y1='${item.linearGradient.y1}'
							y2='${item.linearGradient.y2}'
							gradientUnits='userSpaceOnUse'>
							<stop class='${item.linearGradient.gradientStartClass}'></stop>
							<stop class='${item.linearGradient.gradientEndClass}' offset='1'></stop>
						</lineargradient>
					`
									);
								}
							});

							svg.append(defs);

							svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`);
							svg.setAttributeNS(null, 'width', width);
							svg.setAttributeNS(null, 'height', height);
							svg.setAttributeNS(null, 'fill', 'none');
							svg.setAttributeNS(null, 'class', svgClass);

							document.querySelector(container).append(svg);

							if (animatedTag && document.querySelector(animatedTag) && animatedClass) {
								setTimeout(() => {
									if (animatedClass[0]) {
										document
											.querySelector(animatedTag)
											.classList.add(`${animatedClass[0]}`);
									}
								}, 1000);
								setTimeout(() => {
									if (animatedClass[1]) {
										document
											.querySelector(animatedTag)
											.classList.add(`${animatedClass[1]}`);
									}
								}, 2000);
							}
						}
					});
				})
				.catch((error) => {
					console.error(error);
				});
		}
		if (window.matchMedia('(max-width: 1200px)').matches) {
			document.querySelector(container).innerHTML = '';
		}
	}
}
