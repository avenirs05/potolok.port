		var $animation_elements = $('.animation-element');
		var $window = $(window);
		function check_if_in_view() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);
		  $.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);
			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('in-view');
			} else {
			  $element.removeClass('in-view');
			}
		  });
		}
		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');

/* --------------------------------------------------------------------------------------------------------------------------------------------------*/

/* цифры */
	$(document).ready(function(){
    var show = true;
    var countbox = "#content7";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 450 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $("#dynamic-number1").spincrement({
			from: 0,                // Стартовое число
			to: 67,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number2").spincrement({
			from: 0,                // Стартовое число
			to: 28,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number3").spincrement({
			from: 0,                // Стартовое число
			to: 5,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number21").spincrement({
			from: 0,                // Стартовое число
			to: 52,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number22").spincrement({
			from: 0,                // Стартовое число
			to: 39,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number23").spincrement({
			from: 0,                // Стартовое число
			to: 9,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number31").spincrement({
			from: 0,                // Стартовое число
			to: 78,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number32").spincrement({
			from: 0,                // Стартовое число
			to: 19,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number33").spincrement({
			from: 0,                // Стартовое число
			to: 3,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number42").spincrement({
			from: 0,                // Стартовое число
			to: 97,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
			$("#dynamic-number43").spincrement({
			from: 0,                // Стартовое число
			to: 3,              // Итоговое число.
			duration: 2000          // Продолжительность анимации в миллисекундах
			});
 
            show = false;
        }
    });
});
/* --------------------------------------------------------------------------------------------------------------------------------------------------*/

/* hover смена изображений */
		$('.cnt8_blc1').hover(function(){
		$('.image1').css('background-color','transparent');
		$('.image1').css('border','2px solid red');
		$('.image1').css('background-image','url("img/cnt8_1_hover.png")')
		},
                  function(){
		$('.image1').css('background-color','white');
		$('.image1').css('border','none');
		$('.image1').css('background-image','url("img/cnt8_1.png")')
		})
		
				$('.cnt8_blc2').hover(function(){
		$('.image2').css('background-color','transparent');
		$('.image2').css('border','2px solid red');
		$('.image2').css('background-image','url("img/cnt8_2_hover.png")')
		},
                  function(){
		$('.image2').css('background-color','white');
		$('.image2').css('border','none');
		$('.image2').css('background-image','url("img/cnt8_2.png")')
		})
		
				$('.cnt8_blc3').hover(function(){
		$('.image3').css('background-color','transparent');
		$('.image3').css('border','2px solid red');
		$('.image3').css('background-image','url("img/cnt8_3_hover.png")')
		},
                  function(){
		$('.image3').css('background-color','white');
		$('.image3').css('border','none');
		$('.image3').css('background-image','url("img/cnt8_3.png")')
		})
		
				$('.cnt8_blc4').hover(function(){
		$('.image4').css('background-color','transparent');
		$('.image4').css('border','2px solid red');
		$('.image4').css('background-image','url("img/cnt8_4_hover.png")')
		},
                  function(){
		$('.image4').css('background-color','white');
		$('.image4').css('border','none');
		$('.image4').css('background-image','url("img/cnt8_4.png")')
		})
		
				$('.cnt8_blc5').hover(function(){
		$('.image5').css('background-color','transparent');
		$('.image5').css('border','2px solid red');
		$('.image5').css('background-image','url("img/cnt8_5_hover.png")')
		},
                  function(){
		$('.image5').css('background-color','white');
		$('.image5').css('border','none');
		$('.image5').css('background-image','url("img/cnt8_5.png")')
		})
		
		
/* --------------------------------------------------------------------------------------------------------------------------------------------------*/

/* калькулятор */	
		

$( ".calc" ).on("input", function() {

		var mat = $('#material option:selected').val();
		var pl=document.getElementById('pl').value;
		var kol_t=document.getElementById('kol_t').value;
		var kol_l=document.getElementById('kol_l').value;
		var dl=document.getElementById('dl').value;
		var kol_s=document.getElementById('kol_s').value;
		var kol_u=document.getElementById('kol_u').value;
		var plnt = $('#gift option:selected').val();
		var pl_price;
		var pl_price_w;
		var obhod_trub;
		var obhod_uglov;
		var karniz;
		var svet;
		var lustr;
		var vstavka;
		

		
			if(mat==2){
				if(pl<13){
					pl_price_w=590;
					pl_price=590;
				}
				if(pl>12 && pl<21){
					pl_price_w=560;
					pl_price=560;
				}
				if(pl>20 && pl<51){
					pl_price_w=530;
					pl_price=530;
				}
				if(pl>50){
					pl_price_w=500;
					pl_price=500;
				}
			}
			if(mat==1){
				if(pl<13){
					pl_price_w=800;
					pl_price=560;
				}
				if(pl>12 && pl<21){
					pl_price_w=830;
					pl_price=580;
				}
				if(pl>20 && pl<51){
					pl_price_w=860;
					pl_price=600;
				}
				if(pl>50){
					pl_price_w=620;
					pl_price=620;
				}
			}
			if(mat==3){
				if(pl<13){
					pl_price_w=1250;
					pl_price=1250;
				}
				if(pl>12 && pl<21){
					pl_price_w=1200;
					pl_price=1200;
				}
				if(pl>20 && pl<51){
					pl_price_w=1150;
					pl_price=1150;
				}
				if(pl>50){
					pl_price_w=1100;
					pl_price=1100;
				}
			}
			if(mat==4){
				if(pl<13){
					pl_price_w=1750;
					pl_price=1750;
				}
				if(pl>12 && pl<21){
					pl_price_w=1700;
					pl_price=1700;
				}
				if(pl>20 && pl<51){
					pl_price_w=1650;
					pl_price=1650;
				}
				if(pl>50){
					pl_price_w=1600;
					pl_price=1600;
				}
			}
			if(mat==5){
				if(pl<13){
					pl_price_w=1950;
					pl_price=1950;
				}
				if(pl>12 && pl<21){
					pl_price_w=1900;
					pl_price=1900;
				}
				if(pl>20 && pl<51){
					pl_price_w=1850;
					pl_price=1850;
				}
				if(pl>50){
					pl_price_w=1800;
					pl_price=1800;
				}
			}
			obhod_trub = 300 * kol_t;
			obhod_uglov = 250 * kol_u;
			karniz = 600 * dl;
			svet = 500 * kol_s;
			lustr = 400 * kol_l;
			vstavka = 100 * pl;
			potoloc = pl_price * pl;
			potoloc_w = pl_price_w * pl;
			
			price_clean = potoloc_w + obhod_trub + obhod_uglov + karniz + svet + lustr + vstavka;
			
			price_30 = potoloc + obhod_trub + obhod_uglov + karniz + svet + lustr + vstavka;
			
			price_wthoutPl = potoloc + obhod_trub + obhod_uglov + karniz + svet + lustr;
			$(".all_red").css('text-decoration','line-through')
			$(".price_box").css('opacity','1')
			$("price_txt").css('opacity','1')
			$("#result1").text(price_30);	
			
			$("#price").val(price_wthoutPl);
			$("#result2").text(price_clean);
			$("#result3").text(price_wthoutPl );
		    $(".print_link").removeAttr("disabled");
	});
	
	
/* --------------------------------------------------------------------------------------------------------------------------------------------------*/



/* --------------------------------------------------------------------------------------------------------------------------------------------------*/

/* Скролл */	

			$(window).scroll(function(){
			var top = $(this).scrollTop();
			if (top > 1100) {
		$('#content11').addClass('animate-2 active');
			}
		});

			$(window).scroll(function(){
			var top = $(this).scrollTop();
			if (top > 3000) {
		$('#content11_one').addClass('animate-2 active');
			}
		});
		
					$(window).scroll(function(){
			var top = $(this).scrollTop();
			if (top > 5400) {
		$('#content11_two').addClass('animate-2 active');
			}
		});		
		
		
/* --------------------------------------------------------------------------------------------------------------------------------------------------*/

/* Печать с формы */			
			
				
/* --------------------------------------------------------------------------------------------------------------------------------------------------*/

/* Чек боксы */				

			$("#checkboxs ul li").click(function(e) {
			  e.preventDefault();
			  $("#checkboxs ul li").removeClass('active');
			  $(this).addClass('active');
			})
			$("#checkboxs2 ul li").click(function(e) {
			  e.preventDefault();
			  $("#checkboxs2 ul li").removeClass('active');
			  $(this).addClass('active');
			})
/* --------------------------------------------------------------------------------------------------------------------------------------------------*/

/* В подарок */		
		
		$(function(){

	        $('#gift').change(function(){

	         var gifts = $('#gift option:selected').val();
			
			if(gifts==1){
				$(".price_box2").css('opacity','1');
				$("#price").val(price_wthoutPl);
			}
			if(gifts==2){
				$(".price_box2").css('opacity','0');
				$("#price").val(price_30);
			}
	    })
	});
	
/* 30% скидка */

		$(function(){

	        $('#material').change(function(){

	         var mat_v = $('#material option:selected').val();
			
			if(mat_v==1){
				$(".material_txt").css('display','block');
			}
			else{
				$(".material_txt").css('display','none');
			}
	    })
	});