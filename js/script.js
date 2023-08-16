/*==================================== ANIMATION ====================================*/
; (function () {
	let animItems = document.querySelectorAll('.anim-item');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll(event) {
			// if (event.cancelable) event.preventDefault();

			for (let i = 0; i < animItems.length; i++) {
				let animItem = animItems[i];
				let animItemHeight = animItem.offsetHeight;
				let animItemOffset = offset(animItem).top;
				let animStart = 10;
				let animItemPoint = window.innerHeight - (animItemHeight / animStart);

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - (window.innerHeight / animStart);
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
					animItem.classList.add('anim-item--active');
				} else {
					if (!animItem.classList.contains('anim-no-hide')) {
						animItem.classList.remove('anim-item--active');
					}
				}

				function offset(elem) {
					let rect = elem.getBoundingClientRect(),
						scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
						scrollTop = window.pageYOffset || document.documentElement.scrollTop;
					return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
				}
			}
		}
	}
})();

window.onload = function () {
	let loadings = document.querySelectorAll('.loading');

	for (let loading of loadings) {
		loading.classList.add('loaded');
	}
};


/*====================================  ====================================*/


; (function () {
	$(function () {

		//filter
		var mixer = mixitup('.blog__grid');

		//slider
		$('.customers__slider').slick({
			arrows: false,
			slidesToShow: 2,
			infinite: true,
			dragable: false,
			waitForAnimate: false,
			responsive:
				[
					{
						breakpoint: 830,
						settings: {
							slidesToShow: 1,
						}
					},
				],
			arrows: false,
			dots: true,
			appendDots: ('.customers__dots'),
			waitForAnimate: false,
		})

		//arrows

		$('.customers__slider-prev').on('click', function () {
			$('.customers__slider').slick('slickPrev')
		})
		$('.customers__slider-next').on('click', function () {
			$('.customers__slider').slick('slickNext')
		})


		$('.burger, .overlay, .header__top ').on('click', function () {
			$('.header__top').toggleClass('header__top--open')
			$('.overlay').toggleClass('overlay--show')
			$('.burger').toggleClass('burger--open')
		})

	})

	let links = document.querySelectorAll('.questions__acc-heading');

	for (let link of links) {
		link.addEventListener('click', function (e) {
			// if (e.cancelable) e.preventDefault();

			let open = document.querySelector('.questions__acc-item--active');

			if (this.parentElement.parentElement.classList.contains('questions__acc-item--active')) {
				this.parentElement.parentElement.classList.remove('questions__acc-item--active');
			}
			else {
				this.parentElement.parentElement.classList.add('questions__acc-item--active');
				if (open) {
					open.classList.remove('questions__acc-item--active');
				}
			}
		})
	}

})();
