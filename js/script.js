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

	$('.customers__slider-prev').on('click', function (e) {
		e.preventDefault()
		$('.customers__slider').slick('slickPrev')
	})
	$('.customers__slider-next').on('click', function (e) {
		e.preventDefault()
		$('.customers__slider').slick('slickNext')
	})


	$('.burger, .overlay, .header__top ').on('click', function (e) {
		$('.header__top').toggleClass('header__top--open')
		$('.overlay').toggleClass('overlay--show')
		$('.burger').toggleClass('burger--open')
	})

})

//old acc
// let accHeadings = document.querySelectorAll('.questions__acc-heading');
// let lines = document.querySelectorAll('.questions__acc-line--vertical');
// let accItems = document.querySelectorAll('.questions__acc-item');

// for (let i = 0; i < accHeadings.length; i++) {
// 	accHeadings[i].addEventListener('click', function () {

// 		accItems[i].classList.toggle('question__acc-item--active');

// 		lines[i].classList.toggle('questions__acc-line--active');
// 		let text = this.nextElementSibling;
// 		if (text.style.maxHeight) {
// 			text.style.maxHeight = null;
// 		} else {
// 			text.style.maxHeight = text.scrollHeight + "px";
// 		}
// 	});
// }

let links = document.querySelectorAll('.questions__acc-heading');

for (let link of links) {
	link.addEventListener('click', function (e) {
		e.preventDefault();

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

