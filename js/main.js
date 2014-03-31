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

});