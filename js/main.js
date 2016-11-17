$(document).ready(function() {
	$('#animateCuadro').removeClass('active-outline');
	$('#animateCuadro').removeClass('crystal');
	
	setTimeout(function(){
		$('#animateCuadro').addClass('active-outline');

		setTimeout(function(){
			$('.animateObj').each(function(index, el) {
				setTimeout(function(){
					$(el).removeClass('animateObj');
				}, (index * 250));
			});
		}, 1800);
	}, 100);
});