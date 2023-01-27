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



	$('.questions__acc-info').on('click', function (e) {
		e.preventDefault()
		if ($(this).hasClass('questions__acc-item--active')) {
			$(this).removeClass('questions__acc-item--active')
			$(this).children('.questions__acc-text').slideUp()
		} else {
			$('.questions__acc-item').removeClass('questions__acc-item--active')
			$('.questions__acc-text').slideUp()
			$(this).addClass('questions__acc-item--active')
			$(this).children('.questions__acc-text').slideDown()
		}
	})


	$('.burger, .overlay, .header__top ').on('click', function (e) {
		e.preventDefault()
		$('.header__top').toggleClass('header__top--open')
		$('.overlay').toggleClass('overlay--show')
		$('.burger').toggleClass('burger--open')
	})

})

