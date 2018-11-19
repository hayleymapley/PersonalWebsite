
// Menu-toggle button
      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });
      
      jQuery( document ).ready(function() {
    	    jQuery('.navbar-collapse a').click(function(){ 
    	      jQuery('.navbar-collapse').css('height', '0');
    	      jQuery('.navbar-collapse').removeClass('in');
    	    });  
    	 });

      // Scrolling Effect
      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }
            else {
                  $('nav').removeClass('black');
            }
      })

//Smooth scrolling using jQuery

$(document).ready(function(){

 	$("a").on('click', function(event) { 		//Adds smooth scroll to all links
	    if (this.hash !== "") {					//Ensures that the hash location exists (e.g. #about)...
      		event.preventDefault();				//...Before overriding default behaviour
    		var hash = this.hash;				//Stores the hash
      		$('html, body').animate({			//Uses jQuery's animate() method
       			 scrollTop: $(hash).offset().top -50
      			}, 800
      		);
    	}
  	});
});

//Slideshow functionality

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i=0; i < slides.length; i++) {
		slides[i].style.display ="none";
	}
	for (i=0; i< dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

