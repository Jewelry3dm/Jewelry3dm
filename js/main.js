/* =================================
------------------------------------
	Riddle - Portfolio
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';


$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

	if($('.portfolios-area').length > 0 ) {
		var containerEl = document.querySelector('.portfolios-area');
		var mixer = mixitup(containerEl);
	}

});


(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});



	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*----------------------
		Portfolio layout
	------------------------*/
	var port_fi =  $('.portfolios-area .first-item'),
		port_si =  $('.portfolios-area .second-item'),
		port_intro_h =  $('.portfolio-intro').innerHeight();

	if ($(window).width() > 991) {
		port_fi.appendTo('.portfolio-intro');
		port_si.find('.portfolio-item').height(port_intro_h + 601);
	}

	$('.portfolio-item.pi-style2').each(function() {
		var pi_width = $(this).width();
		$(this).height(pi_width + 50);
	});



	/*------------------
		Popup
	--------------------*/
	$('.portfolio-item').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 400,
	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.75,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 3
	$("#progress3").circleProgress({
		value: 0.25,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 4
	$("#progress4").circleProgress({
		value: 0.95,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
}

window.onscroll = function() { stickyMenu() };
function stickyMenu() {
	const menu = document.getElementById('header-section');
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		menu.classList.add('active-top-menu');	
	}
	else {
		menu.classList.remove('active-top-menu');
	}
}


$(document).ready(function() {
	$('.count').each(function() {	
			var $this = this;
			let countTo = $this.dataset.count;
			let localStart = 400;
			setInterval(function() {
			  if (localStart < countTo) {
				localStart++;
				$this.innerHTML = localStart;
			  }
			}, 40);	
	})
});

})(jQuery);