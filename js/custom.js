(function($) {

	"use strict";

		/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

	if ( $('.pagepiling').length ) {
		$('.pagepiling').pagepiling({
			scrollingSpeed: 280,
			menu: '#menu, #menuMain',
			anchors: ['home', 'about', 'portfolio', 'testimonials', 'contact'],
			loopTop: false,
			loopBottom: false,
			navigation: {
				'position': 'left',
				'tooltips': ['Home Section', 'About Section', 'Porfolio Section', 'Testimonials Section', 'Contact Section']
			},
			afterRender: function(){
				$('#pp-nav').addClass('custom');
			},
			afterLoad: function(anchorLink, index){
				if(index>1){
					$('#pp-nav').removeClass('custom');
				}else{
					$('#pp-nav').addClass('custom');
				}
			},
			onLeave: function(){
				$('.a-progressbar .progress-bar').each(function() {
					if ($('.slide-skills').hasClass('active')) {
						$(this).width($(this).attr('aria-valuenow') + '%');
					} else {
						$(this).width('0');
					}
				});

			}
		});
	}


	$(document).ready(function() {
// init Isotope
  /*var $grid =  $('.column').isotope({
    itemSelector: '.pst-portfolio-item1',
    layoutMode: 'fitRows',
    percentPosition: true,
    masonry: {
      horizontalOrder: true
    }
  });*/

  // layout Isotope again after all images have loaded
  if ($('.pst-portfolio-imgs').length > 0 ) {
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
   });
  };
  //
   $('.pst-portfolio-filter').on( 'click', function() {   	
						$(".Portfolio-filter-list").css("display", "block");
						$('.pst-portfolio-filter').css("display", "none")
   });
  // filter items on button click
  $('.Portfolio-filter-list').on( 'click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  // for menu active 
  $('.Portfolio-filter-list a').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });


		// init Isotope
	var $grid = $(".project-container").isotope({
		itemSelector: ".project-item",
		percentPosition: true,
		masonry: {
			horizontalOrder: true,
		},
	});
	// layout Isotope again after all images have loaded
  if ($('.project-container').length > 0 ) {
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
   });
  };
$(function () {
		$(".column .figure").each(function () {
			$(this).hoverdir();
		});
	});
	// layout Isotope again after all images have loaded
	if ($(".all-projects").length > 0) {
		$grid.imagesLoaded().progress(function () {
			$grid.isotope("layout");
		});
	}

		/* ----------------------------------------------------------- */
		/*  STOP VIDEOS
        /* ----------------------------------------------------------- */

		$('.slideshow nav span').on('click', function () {
			stop_videos();
		});

		/* ----------------------------------------------------------- */
		/*  FIX REVEALATOR ISSUE AFTER PAGE LOADED
        /* ----------------------------------------------------------- */

		$(".revealator-delay1").addClass('no-transform');

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO GALLERY
        /* ----------------------------------------------------------- */

		if ($('.grid').length) {
			new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
		}

		/* ----------------------------------------------------------- */
		/*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
        /* ----------------------------------------------------------- */

		$(".grid figure").on('click', function() {
			$("#navbar-collapse-toggle").addClass('hide-header');
		});

		/* ----------------------------------------------------------- */
		/*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
        /* ----------------------------------------------------------- */

		$(".nav-close").on('click', function() {
			$("#navbar-collapse-toggle").removeClass('hide-header');
		});
		$(".nav-prev").on('click', function() {
			if ($('.slideshow ul li:first-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});
		$(".nav-next").on('click', function() {
			if ($('.slideshow ul li:last-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
        /* ----------------------------------------------------------- */

		var item = $(".grid li figure");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			$(item[i]).hoverdir();
		}

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

		$(".contactform").on("submit", function() {
			$(".output_message").text("Sending...");

			var form = $(this);
			$.ajax({
				url: form.attr("action"),
				method: form.attr("method"),
				data: form.serialize(),
				success: function(result) {
					if (result == "success") {
						$(".form-inputs").css("display", "none");
						$(".box p").css("display", "none");
						$(".contactform").find(".output_message").addClass("success");
						$(".output_message").text("Message Sent!");
					} else {
						$(".tabs-container").css("height", "440px");

						$(".contactform").find(".output_message").addClass("error");
						$(".output_message").text("Error Sending!");
					}
				}
			});

			return false;
		});

	});

	$(document).keyup(function(e) {

		/* ----------------------------------------------------------- */
		/*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
    /* ----------------------------------------------------------- */
		if (e.keyCode === 27) {
			stop_videos();
			$('.close-content').click();
			$("#navbar-collapse-toggle").removeClass('hide-header');
		}
		if ((e.keyCode === 37) || (e.keyCode === 39)) {
			stop_videos();
		}
	});


})(jQuery);
