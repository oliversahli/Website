/** 
 * ===================================================================
 * Main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/* --------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {
      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      }); 
  	})


  	/* --------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */  
  	setTimeout(function() {

   	$('.main-content h1').fitText(.8, { minFontSize: '42px', maxFontSize: '94px' });

  	}, 100);


  	/* --------------------------------------------------- */
	/* lettering js
	------------------------------------------------------ */
	$(".kern-this").lettering(); 


	/* --------------------------------------------------- */
  	/* Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('#menu-nav-wrap'),
       mainContent = $('#main-404-content'),
       mainHeader = $('.main-header');

	// open-close menu by clicking on the menu icon
	toggleButton.on('click', function(e){

		e.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.toggleClass('menu-is-open');
		mainHeader.toggleClass('menu-is-open');
		mainContent.toggleClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, 
			// so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
			
		// check if transitions are not supported 
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}

	});

	// close menu clicking outside the menu itself
	mainContent.on('click', function(e){

		if( !$(e.target).is('.menu-toggle, .menu-toggle span') ) {

			toggleButton.removeClass('is-clicked');
			nav.removeClass('menu-is-open');
			mainHeader.removeClass('menu-is-open');
			mainContent.removeClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			
			// check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});


   /* --------------------------------------------------- */
	/*  Vegas Slideshow
	------------------------------------------------------ */
	$(".main-content-slides").vegas({
		transition: 'fade',
		transitionDuration: 2500,
		delay: 5000,
    	slides: [
       	{ src: "images/slides/1.jpg" },
        	{ src: "images/slides/2.jpg" },
        	{ src: "images/slides/3.jpg" },
        	{ src: "images/slides/4.jpg" },
        	{ src: "images/slides/5.jpg" },
        	{ src: "images/slides/6.jpg" },
		{ src: "images/slides/15.jpg" },
        	{ src: "images/slides/7.jpg" },
        	{ src: "images/slides/8.jpg" },
        	{ src: "images/slides/9.jpg" },
		{ src: "images/slides/10.jpg" },
		{ src: "images/slides/11.jpg" },
		{ src: "images/slides/12.jpg" },
		{ src: "images/slides/14.jpg" },
		{ src: "images/slides/13.jpg" },

    	]
	});


   /* --------------------------------------------------- */
	/*  Particle JS
	------------------------------------------------------ */
	$('.main-content-particle-js').particleground({
	    dotColor: '#fff',
	    lineColor: '#555555',
	    particleRadius: 6,
	    curveLines: true,
	    density: 9000,
	    proximity: 100
	});  	
 

})(jQuery);
