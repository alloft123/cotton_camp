

(function ($) {

/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

// Speed of the automatic slideshow
var slideshowSpeed = 6000;

// Variable to store the images we need to set as background
// which also includes some text and url's.
var photos = [ {
		"title" : "Stairs",
		"image" : "../../skin/frontend/cottoncamp/categorypage/images/vacation.jpg",
		"url" : "http://www.sxc.hu/photo/1271909",
		"firstline" : "Going on",
		"secondline" : "vacation?"
	}, {
		"title" : "Office Appartments",
		"image" : "../../skin/frontend/cottoncamp/categorypage/images/work.jpg",
		"url" : "http://www.sxc.hu/photo/1265695",
		"firstline" : "Or still busy at",
		"secondline" : "work?"
	}, {
		"title" : "Mountainbiking",
		"image" : "../../skin/frontend/cottoncamp/categorypage/images/biking.jpg",
		"url" : "http://www.sxc.hu/photo/1221065",
		"firstline" : "Get out and be",
		"secondline" : "active"
	}, {
		"title" : "Mountains Landscape",
		"image" : "../../skin/frontend/cottoncamp/categorypage/images/nature.jpg",
		"url" : "http://www.sxc.hu/photo/1271915",
		"firstline" : "Take a fresh breath of",
		"secondline" : "nature"
	}, {
		"title" : "Italian pizza",
		"image" : "../../skin/frontend/cottoncamp/categorypage/images/food.jpg",
		"url" : "http://www.sxc.hu/photo/1042413",
		"firstline" : "Enjoy some delicious",
		"secondline" : "food"
	}
];



$(document).ready(function() {
		
	// Backwards navigation
	$("#back").click(function() {
		stopAnimation();
		navigate("back");
	});
	
	// Forward navigation
	$("#next").click(function() {
		stopAnimation();
		navigate("next");
	});
	
	var interval;
	$("#control").toggle(function(){
		stopAnimation();
	}, function() {
		// Change the background image to "pause"
		$(this).css({ "background-image" : "url(images/btn_pause.png)" });
		
		// Show the next image
		navigate("next");
		
		// Start playing the animation
		interval = setInterval(function() {
			navigate("next");
		});
	});
	
	
	var activeContainer = 1;	
	var currentImg = 0;
	var animating = false;
	var navigate = function(direction) {
		// Check if no animation is running. If it is, prevent the action
		if(animating) {
			return;
		}
		
		// Check which current image we need to show
		if(direction == "next") {
			currentImg++;
			if(currentImg == photos.length + 1) {
				currentImg = 1;
			}
		} else {
			currentImg--;
			if(currentImg == 0) {
				currentImg = photos.length;
			}
		}
		
		// Check which container we need to use
		var currentContainer = activeContainer;
		if(activeContainer == 1) {
			activeContainer = 2;
		} else {
			activeContainer = 1;
		}
		
		showImage(photos[currentImg - 1], currentContainer, activeContainer);
		
	};
	
	var currentZindex = -1;
	var showImage = function(photoObject, currentContainer, activeContainer) {
		animating = true;
		
		// Make sure the new container is always on the background
		currentZindex--;
		
		// Set the background image of the new active container
		$("#headerimg" + activeContainer).css({
			"background-image" : "url(images/" + photoObject.image + ")",
			"display" : "block",
			"z-index" : currentZindex
		});
		
		// Hide the header text
		$("#headertxt").css({"display" : "none"});
		
		// Set the new header text
		$("#firstline").html(photoObject.firstline);
		$("#secondline")
			.attr("href", photoObject.url)
			.html(photoObject.secondline);
		$("#pictureduri")
			.attr("href", photoObject.url)
			.html(photoObject.title);
		
		
		// Fade out the current container
		// and display the header text when animation is complete
		$("#headerimg" + currentContainer).fadeOut(function() {
			setTimeout(function() {
				$("#headertxt").css({"display" : "block"});
				animating = false;
			}, 500);
		});
	};
	
	var stopAnimation = function() {
		// Change the background image to "play"
		$("#control").css({ "background-image" : "url(images/btn_play.png)" });
		
		// Clear the interval
		clearInterval(interval);
	};
	
	// We should statically set the first image
	navigate("next");
	
	// Start playing the animation
	interval = setInterval(function() {
		navigate("next");
	});
	
});
})(jQuery);
jQuery.noConflict();


/* Code for Displaying the Image Name*/
(function(b){b.fn.capty=function(g){var k=b.extend({},b.fn.capty.defaults,g);if(this.length==0){a("Selector invalid or missing!");return;}else{if(this.length>1){return this.each(function(){b.fn.capty.apply(b(this),[g]);});}}var j=b(this),d=j.attr("name"),h=b('<div class="'+k.cCaption+'"/>'),e=j;if(j.parent().is("a")){e=j.parent();}var f=e.wrap('<div class="'+k.cImage+'"/>').parent(),i=f.wrap('<div class="'+k.cWrapper+'"/>').parent();i.css({height:j.height(),overflow:"hidden",position:"relative",width:j.width()});h.css({height:k.height,opacity:k.opacity,position:"relative"}).click(function(l){l.stopPropagation();}).appendTo(i);if(d){var c=b(d);if(c.length){c.appendTo(h);}else{h.html('<span style="color: #F00;">Content invalid or missing!</span>');}}else{h.html(j.attr("alt"));}if(k.prefix){h.prepend(k.prefix);}if(k.sufix){h.append(k.sufix);}if(k.animation=="slide"){i.hover(function(){h.animate({top:(-1*k.height)},{duration:k.speed,queue:false});},function(){h.animate({top:0},{duration:k.speed,queue:false});});}else{if(k.animation=="fade"){h.css({opacity:0,top:(-1*k.height)+"px"});i.hover(function(){h.stop().animate({opacity:k.opacity},k.speed);},function(){h.stop().animate({opacity:0},k.speed);});}else{if(k.animation=="fixed"){h.css("top",(-1*k.height)+"px");}else{a(j.attr("id")+": invalid animation!");}}}return j;};function a(c){if(window.console&&window.console.log){window.console.log(c);}}b.fn.capty.defaults={animation:"slide",cCaption:"capty-caption",cImage:"capty-image",cWrapper:"capty-wrapper",height:30,opacity:0.7,prefix:"",speed:200,sufix:""};})(jQuery);

