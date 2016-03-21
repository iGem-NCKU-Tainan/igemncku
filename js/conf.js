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
	$("#buttonAct").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#act").offset().top-navH }, 1000);
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
		var t=document.documentElement.scrollTop || document.body.scrollTop;
		var INTRO=$("#intro").offset().top-navH;
		var ACT=$("#act").offset().top-navH;
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
		else if(t+1>=ACT){
			$("#navbar ul li a").removeClass("active");
			$("#buttonAct").addClass("active");
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


