var navH=60;
$(document).ready( function() {
	$("#buttonCover").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	  $('html, body').animate({ scrollTop: 0 }, 1000);
	});
	$("#buttonIntro").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#intro").offset().top-navH }, 1000);
	});
	$("#buttonAgenda").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#agenda").offset().top-navH }, 1000);
	});
	$("#buttonTravel").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#travel").offset().top-navH}, 1000);
	});
	$("#buttonApply, #toApply").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#apply").offset().top-navH }, 1000);
	});
	$(window).scroll( function(){
		var t= $(document).scrollTop();//document.documentElement.scrollTop || document.body.scrollTop;
		var INTRO=$("#intro").offset().top-navH;
		var AGENDA=$("#agenda").offset().top-navH;
		var TRAVEL=$("#travel").offset().top-navH;
		var APPLY=$("#apply").offset().top-navH-300;
		if(t+1>=APPLY){
			$("#navbar ul li a").removeClass("active");
			$("#buttonApply").addClass("active");
		}
		else if(t+1>=TRAVEL){
			$("#navbar ul li a").removeClass("active");
			$("#buttonTravel").addClass("active");
		}
		else if(t+1>=AGENDA){
			$("#navbar ul li a").removeClass("active");
			$("#buttonAgenda").addClass("active");
		}
		else if(t+1>=INTRO){
			$("#navbar ul li a").removeClass("active");
			$("#buttonIntro").addClass("active");
		}
		else{
			$("#navbar ul li a").removeClass("active");
			$("#buttonCover").addClass("active");
		}
	});
});

function toEvent(section){
	$('html, body').animate({ scrollTop: $("#"+section).offset().top-navH }, 1000);
}

