$(document).ready(function() {

	$('#mywork').click(function(e){
		e.preventDefault();
		linkLocation = this.href;

		$('.intro').removeClass('bounceInLeft');
		$('.intro').addClass('bounceOutRight');
 
		setTimeout(function(){window.location = linkLocation}, 400);
	});

	$('#webwork a').click(function(e){
		e.preventDefault();
		linkLocation = this.href;

		$(this).find('img').addClass('animated bounceOutUp');
 
		setTimeout(function(){window.location = linkLocation}, 400);
	});

	$('#photowork .animated-link').click(function(){
		var image = $(this).attr('href');

		$('body').append('<div class="modal-overlay animated bounceInUp"></div>');
		$('.modal-overlay').append('<button id="close-modal">&#10060;</button>');
		$('.modal-overlay').append('<div class="modal"><div class="spinner"></div>');
		$('.modal').append('<img src="' + image + '" alt="hi"/>');

		return false;
	});

	$('body').on('click', '#close-modal, .modal-overlay', function() {
		$('.modal-overlay').removeClass('bounceInUp');
		$('.modal-overlay').addClass('bounceOutUp');
		setTimeout(function(){$('.modal-overlay').remove();}, 800);
    });

});