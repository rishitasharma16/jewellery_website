
/*------------filter--------------*/

$(function () {
    $('.pr-price').hide();
    $('.d1').show();
      
    $('#select').on("change",function () {
      $('.pr-price').hide();
      $('.d'+$(this).val()).show();
    }).val("1");
});

/*---------Notification-----------*/

var main = function() {
    $('.bellIcon').click(function() {
      $('.notification-menu').toggle(); 
    }); 
    
    $('.post .btn').click(function() {
      $(this).toggleClass('btn-like'); 
    }); 
  }; 
  $(document).ready(main); 


  /*------------banner_slider------------------*/

  var swiper = new Swiper(".bannerSwiper", {
    slidesPerView: '1',
    loop: true,
    speed: 4000,
    pagination: {
      el: ".banner-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".categoriesSwiper", {
    slidesPerView:4,
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        },
  });


// --------------user_account------------------
   $('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

/*-----------edit_divshow-------------*/

$(document).ready(function () {
  $("#btn").click(function () {
      $("#Create").toggle();
  });
});




  /*------------testimonial--------------*/
  

  var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView:1,
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });

  /*------------insta_js-----------------*/

  const panels = document.querySelectorAll('.panel');

function toggleOpen() {
 this.classList.toggle('open');
}

function toggleActive(e) {
 if(e.propertyName.includes('flex')) {
   this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


/*--------------scroll_top----------*/

$(document).ready(function(){
	"use strict";
  var offSetTop = 100;
  var $scrollToTopButton = $('.scrollToTop');
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > offSetTop) {
			$scrollToTopButton.fadeIn();
		} else {
			$scrollToTopButton.fadeOut();
		}
	});
	
	//Click event to scroll to top
	$scrollToTopButton.click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
  
 
/*--------------header_fixed-------------------*/

$(function(){
  var lastScrollTop = 0, delta = 5;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     
     if(Math.abs(lastScrollTop - st) <= delta)
        return;
     
     if (st > lastScrollTop){
         // downscroll code
         $("#header").css('display','none').hover ()
     } else {
        // upscroll code
        $("#header").css('display','block');
     }
     lastScrollTop = st;
  });
});


/*------------product_details_slider-------------*/

var swiper = new Swiper(".pdSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".pdSwiper2", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  loop: false,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

/*-------Quantity---------*/

var input = document.querySelector('#qty');
var btnminus = document.querySelector('.qtyminus');
var btnplus = document.querySelector('.qtyplus');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
	
	var min = Number(input.getAttribute('min'));
	var max = Number(input.getAttribute('max'));
	var step = Number(input.getAttribute('step'));

	function qtyminus(e) {
		var current = Number(input.value);
		var newval = (current - step);
		if(newval < min) {
			newval = min;
		} else if(newval > max) {
			newval = max;
		} 
		input.value = Number(newval);
		e.preventDefault();
	}

	function qtyplus(e) {
		var current = Number(input.value);
		var newval = (current + step);
		if(newval > max) newval = max;
		input.value = Number(newval);
		e.preventDefault();
	}
		
	btnminus.addEventListener('click', qtyminus);
	btnplus.addEventListener('click', qtyplus);
  
} // End if test




/*----------Price_range--------------*/

function getVals(){
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat( slides[0].value );
    let slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
  
  let displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function(){
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName("range-slider");
      for( let x = 0; x < sliderSections.length; x++ ){
        let sliders = sliderSections[x].getElementsByTagName("input");
        for( let y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}


// --------------rating-----------------------
function ratingStar(star){
	star.click(function(){
		var stars = $('.ratingW').find('li')
		stars.removeClass('on');
		var thisIndex = $(this).parents('li').index();
		for(var i=0; i <= thisIndex; i++){
			stars.eq(i).addClass('on');
		}
    putScoreNow(thisIndex+1);
	});
}

function putScoreNow(i){
  $('.scoreNow').html(i);
}


$(function(){
	if($('.ratingW').length > 0){
			ratingStar($('.ratingW li a'));
	}
});


// ---------------write-review-section-----------------------
$(document).ready(function(){
  $(".write_review").click(function(){
    $(".write_review_form").toggle();
  });
});

/*--------------accordionHide------------------------------*/

$(document).ready(function(){
  $("#filter_sort").click(function(){
    $(".accordion_hide").show();
  });
  $('#remove').click(function(){
    $('.accordion_hide').hide();
  });
});

// ---------------checkout----------------------------

$(document).ready(function(){
  $(".order").click(function(){
    $(".shopping_cart").toggle();
  });
});


// --------Notification----------

$(document).ready(function(){
  $(".bell_hover").hover(function(){
    $(".notification").toggle();
  });
});


// product_desc_tab
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



// /-------------Tooltip-----------------/

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


options = {
  "cursorOuter": "circle-basic",
  "hoverEffect": "circle-move",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 40,
  "outerHeight": 40
}
magicMouse(options);


/*-----------Aos_Js------------*/

AOS.init({
  once: true,
});


/*----------Login-----------*/

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});






