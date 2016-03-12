$(document).ready(function(){

	$('.search').on('click', function(e){
		
		if ($(this).hasClass('act-search'))
		{
			$('#search-form').submit();
			$(this).removeClass('act-search');
		}
		else
		{
			$('#search-form').css('display','block')
			$('#search-form input').focus()
			$('.menu ul').css('visibility','hidden')
			$(this).addClass('act-search')
		} 
		e.stopPropagation?e.stopPropagation():e.cancelBubble = true
	})

	$('#search-form').on('click', function(e){
		e.stopPropagation?e.stopPropagation():e.cancelBubble = true
	})

	$('body').on('click', function(){
		$('#search-form').css('display','none')
		$('.search').removeClass('act-search')
		$('.menu ul').css('visibility','visible')
	})

	$(window).on('scroll', function(){
	    if ($(window).scrollTop() > 95)
		    {
		    	$('.menu').addClass('menu-fixed');
		    }else{
		    	$('.menu').removeClass('menu-fixed');
		    }
	}).scroll()

})

$('.fotorama').on('fotorama:ready', function (e, fotorama, extra) { 

	$('.fotorama_custom__arr--prev').on('click', function(e){ 
			fotorama.show('>')
	})
		$('.fotorama_custom__arr--next').on('click', function(e){
			fotorama.show('<')
	})

})