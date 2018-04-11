$(document).ready(function(){
					var showChar = 40;
					$('.more').each(function() {
						var content = $(this).html();

						if(content.length > showChar) {

							var c = content.substr(0, showChar);
							var h = content.substr(showChar-1, content.length - showChar);

							var html = c +  '..';

							$(this).html(html);
						}

					});


				/*	$('.vid').parent().click(function () {
						if($(this).children(".vid").get(0).pause()){
							alert('played');
							$(this).children(".vid").get(0).play();
							$(this).children("i").fadeOut();
						}else{
							$(this).children(".vid").get(0).pause();
							$(this).children("i").fadeIn();
						} **/


						$('.vid').parent().click(function () {
						const pausevid = $(this).children(".vid").get(0).pause();

						if(($(this).children(".vid").get(0).paused)){

							var a = $(this).children(".vid").get(0).play();
							$(this).children("i").fadeOut();

							
							
						}else {
							
							//$('#needattri').removeAttr('src');
							//$('#needattri').attr('src');
							//pausevid;
							$('iframe').attr('src', $('iframe').attr('src'));

							var t = $('#stopvid').attr('src');
						var y = $('#needattri').attr('src');
						alert(t);
						alert(y);
						$('#needattri').attr('src',t);
						$('#stopvid').attr('src',y);
							$(this).children("i").fadeIn();
							
							//delete this;
							//$(a).remove();
						}
					});
					});
					
					



					$(document).ready(function () {
						var trigger = $('.hamburger'),
						overlay = $('.overlay'),
						isClosed = false;

						trigger.click(function () {
							hamburger_cross();      
						});

						function hamburger_cross() {

							if (isClosed == true) {          
								overlay.hide();
								trigger.removeClass('is-open');
								trigger.addClass('is-closed');
								isClosed = false;
							} else {   
								overlay.show();
								trigger.removeClass('is-closed');
								trigger.addClass('is-open');
								isClosed = true;
							}
						}

						$('[data-toggle="offcanvas"]').click(function () {
							$('#wrapper').toggleClass('toggled');
						});  
					});



				
				