$(document).ready(function(){
    $("#logo").click(function(){
		$(".copied_logo").css({"opacity": "1"})
	})

	$(".copied_logo").click(function(){
		$(".copied1_logo").css({"opacity": "1"})
	})

	$(function() {
		$(".trashks_active_trash").draggable()
	});

	$(".trashks_active_trash").mousedown(function(){
			$(this).css({"filter": "blur(2px)", "opacity": ".75", "transition": ".5s"});
	})

	$("#beer").click(function(){
		$(this).animate({
			opacity: 0,	
		}, 150);
		$("#find_beer > p").css({"color": "#777", "text-decoration": "line-through", "text-decoration-thickness": "3px", "transition": ".5s"});
		$('#find_beer_sound')[0].play();
	});

	$("#sausage").click(function(){
		$(this).animate({
			opacity: 0,	
		}, 150);
		$("#find_sausage > p").css({"color": "#777", "text-decoration": "line-through", "text-decoration-thickness": "3px", "transition": ".5s"});
		$('#find_sausage_sound')[0].play();
	});

	$("#kornish").click(function(){
		$(this).animate({
			opacity: 0,	
		}, 150);
		$("#find_kornish > p").css({"color": "#777", "text-decoration": "line-through", "text-decoration-thickness": "3px", "transition": ".5s"});
		$('#find_kornish_sound')[0].play();
	});

	$("#chocolate").click(function(){
		$(this).animate({
			opacity: 0,	
		}, 150);
		$("#find_chocolate > p").css({"color": "#777", "text-decoration": "line-through", "text-decoration-thickness": "3px", "transition": ".5s"});
		$('#find_chocolate_sound')[0].play();	
	});


	$(".create_item").draggable({helper: 'clone'})

	$("#create_action").droppable({
		accept: ".create_item",
		drop: function (event, ui) {
			let copied_item = $(ui.draggable).clone();
			$(this).append(copied_item);
			$(copied_item).draggable();
		}
	})

	$("#one_exposition_image").mousedown(function(){
		$(this).css({"transform": "scale(3)", "transition": "2s"})
	})

	$("#nine_exposition_image").click(function(){
		$(this).animate({"left": "+=7vw"}, "fast")
	})

	$("#eight_exposition_image").click(function(){
		$(this).animate({"top": "+=7vw"}, "fast")
	})

});