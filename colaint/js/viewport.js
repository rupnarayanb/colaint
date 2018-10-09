(function($) {


  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top +130,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  if($(window).width()>1024){
	  $(".vision-container, .technology-container, .offering-container, .meet, .career").each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.find('img').animate({marginLeft: '0'}, 2000);
			el.find('h1').animate({opacity: 1}, 3000);
			el.find('p').animate({opacity: 1}, 3000);
		} 
	  });
	} 
});