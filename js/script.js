$(document).ready(function(){
    $('.icon').on('click', function(){
		$('.menu').toggleClass('active');
		$('.cont-icon').toggleClass('activeicon');
    });
    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $('nav').addClass('dark');
        }else{
            $('nav').removeClass('dark');
        }
	});
	var front = document.querySelector('.face-front');
	var back = document.querySelector('.face-back');
	var flip = document.querySelector('.book-content');
	var uno = document.querySelectorAll('.book');
	var portada = document.querySelectorAll('#portada');
	var contZindex = 2;
	var customZindex = 1;
	var nPagina = 1;
	$('.book').hide();
	$('.book:nth-child(1)').show();
	for (var i = 0; i < uno.length; i++) {
		uno[i].style.zIndex = customZindex;
		customZindex--;
		uno[i].addEventListener('click', function(e){
			var tgt = e.target;
			var unoThis = this;
			unoThis.style.zIndex = contZindex;
			contZindex++;
			if (tgt.getAttribute('class') == 'face-front') {
				nPagina++;
				nPagina += 1;
				$('.book:nth-child('+ nPagina +')').show();
				unoThis.style.zIndex = contZindex;
				contZindex +=20;
				setTimeout(function(){
					unoThis.style.transform = 'rotateY(-180deg)';
				}, 500);
				$('.book:nth-child('+ (nPagina - 2)+')').show();
				$('.book:nth-child('+ (nPagina - 1)+')').show();
			}
			if (tgt.getAttribute("class") == 'face-back') {
				unoThis.style.zIndex = contZindex;
				contZindex +=20;
				setTimeout(function(){
					unoThis.style.transform = 'rotateY(0deg)';
				}, 500);
			}
			
			if (tgt.getAttribute('id') == 'portada') {
				flip.classList.remove("trnsf-reset");
				flip.classList.add("trnsf");
			}
			if (tgt.getAttribute('id') == 'trsf') {
				flip.classList.remove("trnsf");
				flip.classList.add("trnsf-reset");
			}
	
		});
	}
	$('.activeinfo').click(function(){
		var oculto = $('.oculto');
		var active = document.getElementById("cambio");
		if(oculto.hasClass('mostrarmas')){
			oculto.removeClass('mostrarmas');
			active.innerHTML = "Leer Más";
		}else{
			oculto.addClass('mostrarmas');
			active.innerHTML = "Leer Menos";
		}
	});
	$('.activeinfo2').click(function(){
		var oculto = $('.oculto2');
		var active = document.getElementById("cambio2");
		if(oculto.hasClass('mostrarmas')){
			oculto.removeClass('mostrarmas');
			active.innerHTML = "Leer Más";
		}else{
			oculto.addClass('mostrarmas');
			active.innerHTML = "Leer Menos";
		}
	});
	$('.activeinfo3').click(function(){
		var oculto = $('.oculto3');
		var active = document.getElementById("cambio3");
		if(oculto.hasClass('mostrarmas')){
			oculto.removeClass('mostrarmas');
			active.innerHTML = "Leer Más";
		}else{
			oculto.addClass('mostrarmas');
			active.innerHTML = "Leer Menos";
		}
	});
	$('.activeinfo4').click(function(){
		var oculto = $('.oculto4');
		var active = document.getElementById("cambio4");
		if(oculto.hasClass('mostrarmas')){
			oculto.removeClass('mostrarmas');
			active.innerHTML = "Leer Más";
		}else{
			oculto.addClass('mostrarmas');
			active.innerHTML = "Leer Menos";
		}
	});
	$('.activeinfo5').click(function(){
		var oculto = $('.oculto5');
		var active = document.getElementById("cambio5");
		if(oculto.hasClass('mostrarmas')){
			oculto.removeClass('mostrarmas');
			active.innerHTML = "Leer Más";
		}else{
			oculto.addClass('mostrarmas');
			active.innerHTML = "Leer Menos";
		}
	});
    var imgItems = $('.slider li').length;
	var imgPos = 1;
	//var i
	for(var i = 1; i <= imgItems; i++){
		$('.pagination').append('<li></li>');
	}
	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({'background-color': '#3bbbd9'});
	$('.pagination li').click(pagination);
	$('.right').click(nextSlider);
	$('.left').click(prevSlider);
	setInterval(function(){
		nextSlider();
	}, 10000);
	function pagination(){
		var numeroPagina = $(this).index() + 1;
		$('.slider li').hide();
		$('.slider li:nth-child('+ numeroPagina +')').fadeIn();
		$('.pagination li').css({'background-color': '#EBEBEB'});
		$(this).css({'background-color': '#3bbbd9'});
		imgPos = numeroPagina;
	}
	function nextSlider(){
		if(imgPos >= imgItems){
			imgPos = 1;
		}else{
			imgPos++;
		}
		$('.pagination li').css({'background-color': '#EBEBEB'});
		$('.pagination li:nth-child('+ imgPos +')').css({'background-color': '#3bbbd9'});
		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}
	function prevSlider(){
		if(imgPos <= 1){imgPos = imgItems;}
		else{imgPos--;}
		$('.pagination li').css({'background-color': '#EBEBEB'});
		$('.pagination li:nth-child('+ imgPos +')').css({'background-color': '#3bbbd9'});
		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}
	$('.galeria__img').click(function(e){
        var img = e.target.src;
        var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modal__img"><div class="modal__boton" id="modal__boton"><i class="fas fa-times-circle"></i></div></div>';
        $('body').append(modal);
        $('#modal__boton').click(function(){
            $('#modal').remove();
		});
		$('.modal').click(function(){
            $('#modal').remove();
		});
	});
	$(document).on('keyup', function(e){
		if(e.key === 'Escape'){
			$('#modal').remove();
		}
	});
	(function() {
		var infoElem = $('.info');
		infoElem.each(function() {
			var self = $(this);
			var	selfTooltripText = self.data('tooltip-text');
			if ( selfTooltripText ) $('<span/>', {class: 'tooltip', text: selfTooltripText}).appendTo(self);
		});
	})();
	(function() {
		var aboutEl = $('div.img-grupo');
		var aboutElOffset = aboutEl.offset().top/2;
		var aboutEl2 = $('div.info-grupo');
		var aboutElOffset2 = aboutEl2.offset().top/2;
		var aboutEl3 = $('div.about');
		var aboutElOffset3 = aboutEl3.offset().top/1.5;
		var documentEl = $(document);
		documentEl.on('scroll', function(){
			if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('fromleft') ) aboutEl.removeClass('fromleft');
			if ( documentEl.scrollTop() > aboutElOffset2 && aboutEl2.hasClass('frombottom') ) aboutEl2.removeClass('frombottom');
			if ( documentEl.scrollTop() > aboutElOffset3 && aboutEl3.hasClass('frombottom') ) aboutEl3.removeClass('frombottom');
		});
	})();
});
(function() {
	var aboutEl = $('div.itm1');
	var aboutElOffset = aboutEl.offset().top/2;
	var aboutEl2 = $('div.itm2');
	var aboutElOffset2 = aboutEl2.offset().top/1.6;
	var aboutEl3 = $('div.itm3');
	var aboutElOffset3 = aboutEl3.offset().top/1.3;
	var aboutEl4 = $('div.itm4');
	var aboutElOffset4 = aboutEl4.offset().top/1.2;
	var aboutEl5 = $('div.itm5');
	var aboutElOffset5 = aboutEl5.offset().top/1.1;
	var documentEl = $(document);
	documentEl.on('scroll', function(){
		if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('item-person') ) aboutEl.removeClass('item-person');
		if ( documentEl.scrollTop() > aboutElOffset2 && aboutEl2.hasClass('item-person2') ) aboutEl2.removeClass('item-person2');	
		if ( documentEl.scrollTop() > aboutElOffset3 && aboutEl3.hasClass('item-person') ) aboutEl3.removeClass('item-person');
		if ( documentEl.scrollTop() > aboutElOffset4 && aboutEl4.hasClass('item-person2') ) aboutEl4.removeClass('item-person2');
		if ( documentEl.scrollTop() > aboutElOffset5 && aboutEl5.hasClass('item-person') ) aboutEl5.removeClass('item-person');
	});
})();