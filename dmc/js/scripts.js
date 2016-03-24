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

	

	$('.manager a').on('click', function(e){
		var $manager = $(this).closest('.manager');

		var photo = $manager.data('image')
		var name =  $manager.data('name')
		var job =  $manager.data('job')
		var text =  $manager.data('text')

		$('.popup').css('visibility','visible')
		$('.popup-manager img').attr('src', photo)
		e.preventDefault()
		console.log(photo)
	})

})

// $('.fotorama').on('fotorama:ready', function (e, fotorama, extra) { 

// 	$('.fotorama_custom__arr--prev').on('click', function(){ 
// 		fotorama.show('<')
// 	})

// 	$('.fotorama_custom__arr--next').on('click', function(){
// 		fotorama.show('>')
// 	})

// })