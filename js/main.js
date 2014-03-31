$(document).ready(function() {

	$('#mywork').click(function(e){ 
		e.preventDefault();
		linkLocation = this.href;  

		$('.intro').removeClass('bounceInLeft');
		$('.intro').addClass('bounceOutRight');
 
		setTimeout(function(){window.location = linkLocation}, 800);
	});

});