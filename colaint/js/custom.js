$(document).ready(function(){

	$(window).scroll(function(){
		
		if(window.pageYOffset> 200){
			$('#sticky').show();
		}else{
			$('#sticky').hide();
		}
	});
	
	$('.meet-btn').each(function(){
		$(this).bind('click',function(e){
			  var target = "#" + this.getAttribute('data-target');
				$('html, body').animate({
					scrollTop: ($(target).offset().top) -50
				}, 2000);
		});
	
	});
	
	
		$('#discover').bind('click',function(e){
			  var target = "#" + this.getAttribute('data-target');
				$('html, body').animate({
					scrollTop: ($(target).offset().top) -50
				}, 2000);
		});
	

	
	 $('.tagline').addClass('slideDown')
	
});