$(document).ready(function(){

	'use strict';

	// плавный скролл до пункта меню
	$('a[href^="#"]').click(function() {
		let target = $(this).attr('href');
		$('html, body').animate(
			{
				scrollTop: $(target).offset().top
 			},
			1000
		);
	});

	// липкое фиксированное меню
	let offset = $('#bottom_header').offset();
	$(window).scroll( function() {
		if ( $(window).scrollTop() > offset.top ) {
			$('#bottom_header').addClass('fixed-nav');
		} else {
			$('#bottom_header').removeClass('fixed-nav');
		}
	});

	// слайдер для блока Testimonials
	if ( window.innerWidth > 1024 ) {
		$('#slider_tm').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	} else {
		$('#slider_tm').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	}

	// добавление раздела галлереи
	$('#view_all_gallery').click(function() {
		let content = '<div class="gallery_line main_flex__nowrap flex__jcontent_between"><div class="box_img_gallery"><img src="img/gallery/thumbnail-01.jpg" alt=""></div><div class="box_img_gallery"><img src="img/gallery/thumbnail-02.jpg" alt=""></div></div><div class="name_gallery"><p>Marina Palms / <span class="blue">North Miami Beach, FL 33162</span></p></div>';
		$('#gallery_box').append(content);
		$(this).remove();
	});

	// показ формы заказа звонка
	$('#modal_box, #black_fill').hide();
	$('#call').click(function() {
		$('#modal_box, #black_fill').show();
	});
	$('#close_modal, #black_fill').click(function() {
		$('#modal_box, #black_fill').hide();
	});

});