


$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});




//owl-carousel	

var owl = $('.owl-carousel');
  owl.owlCarousel({
  margin: 10,
	autoplayHoverPause:false,
    responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
			
			
			

			

	
	
	
	
	
	
	
	
	